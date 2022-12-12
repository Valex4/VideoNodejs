let conexion = require('../config/conexion');
let libro = require("../model/libro");
let borrar= require("fs");
module.exports = {
    //Todo esto es del crud //
    index:function(req,res){

        libro.obtenerPlantas(conexion,function(err,datos){
            libro.obtenerHerramientas(conexion,(err, herramient)=>{
                console.log("Impriminedo las plantas");
                console.log(datos);
                console.log("imprimiendo las herramientas");
                console.log(herramient);
                res.render('libros/index',{title: 'Aplicacion', libros:datos, herramientas: herramient});
            });        
        });

        
},
crear:function(req,res){
    res.render('libros/crear');
},
guardar:function(req,res){
    console.log(req.body);
    console.log(req.file.filename);

    libro.insertar(conexion,req.body,req.file,function(err){
    res.redirect('/libros');
        });
},
eliminar:function(req,res){
    console.log("recepcion de datos");
    console.log(req.params.id);
    let id = parseInt(req.params.id);
    libro.retornarDatosID(conexion,id,function(err,registros){
        console.log("imprimiendo los registros");
        console.log(registros);  
        var nombreImagen = "public/images/"+(registros[0].imagen);
        //res.send(nombreImagen);
        if(borrar.existsSync(nombreImagen)){
            borrar.unlinkSync(nombreImagen);
          }
          libro.borrar(conexion,req.params.id,function(err){
  
            res.redirect('/libros');
          })
  

});
},
editar:function(req, res){
    console.log("Estamos en editar el libro");
    console.log(req.params.id); 
    libro.retornarDatosID(conexion,req.params.id,function(err,datos){
        console.log("Imprimiendo los datos recuperados para editar");
        console.log(datos);
        if(datos[0].tipo == "planta"){
            console.log("editando una planta");
            res.render("libros/editar",{ datos:datos });
        }else{
            console.log("Editanto una herramienta");
            res.render("libros/editarHerramienta",{ datos:datos });
        }
        
    });
    //res.redirect('/libros/editar');
},
update:function(req, res) {
    console.log("Vamos a actualizar la informacion de la base");
    console.log(req.body.id);
    if(req.file){
        if(req.file.filename){

            libro.retornarDatosID(conexion,req.body.id,function(err,registros){
                console.log(registros)
              var nombreImagen="public/images/"+(registros[0].imagen);
              if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen);
              }

              libro.actualizarArchivo(conexion,req.body,req.file,function(err){
                
              });
            
    
            });

        }

        
      }
      if(req.body.nombre){
      libro.actualizar(conexion, req.body, (err)=>{})
      }
      res.redirect('/libros');
},
crearHerramienta:function(req, res){
    res.render('libros/crearHerramienta');
},
guardarHerramienta:function(req, res){
    console.log("estas en guardar herramienta");    
    console.log(req.body);
},
//Aqui termina el crud //

} 
