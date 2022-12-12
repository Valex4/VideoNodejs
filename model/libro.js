module.exports = {
    obtener:function(conexion, funcion) {
        conexion.query("Select * from productos", funcion);
    },
    insertar:function(conexion,datos,archivos,funcion) {
        conexion.query("INSERT INTO productos (nombre,categoria, tipo,stock,precio,id_vendedor, imagen) VALUES (?,?,?,?,?,?,?)", [datos.nombre, datos.categoria, datos.tipo, datos.stock,datos.precio,datos.id_vendedor, archivos.filename], funcion);
    },
    retornarDatosID:function(conexion,id,funcion){
        conexion.query("Select * from productos WHERE id_producto=? ",[id],funcion);
    },
    borrar:function(conexion,id,funcion){
        conexion.query("DELETE FROM productos WHERE id_producto=?",[id],funcion);
      },
      actualizarArchivo:function(conexion,datos,archivos,funcion){
        conexion.query("UPDATE productos SET imagen=? WHERE id_producto=?",[archivos.filename,datos.id],funcion);
      },
      actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE productos SET nombre=?,categoria=?,precio=?,stock=? WHERE id_producto=?",[datos.nombre,datos.categoria,datos.precio,datos.stock,datos.id],funcion);
      },
      obtenerPlantas:function(conexion, funcion) {
        conexion.query("Select * from productos where tipo = \"planta\" ", funcion);
    },
    obtenerHerramientas:function(conexion, funcion) {
      conexion.query("Select * from productos where tipo = \"herramienta\" ", funcion);
  }

}