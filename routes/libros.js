var express = require('express');
var router = express.Router();
const librosController = require("../controllers/librosController");

let multer = require('multer');
let fecha = Date.now();
let rutaAlmacen = multer.diskStorage(
    {
        destination:function (request, file, callback) {
            callback(null,'./public/images/');
        },
        filename:function(request, file, callback){
            console.log(file);
            callback(null,fecha+"_"+file.originalname);
        }
    }
);
let cargar = multer({storage:rutaAlmacen});


/* GET home page. */
router.get('/',librosController.index);
router.get('/crear',librosController.crear);
router.post("/",cargar.single("archivo"),librosController.guardar)
router.post('/eliminar/:id',librosController.eliminar);
router.get("/editar/:id",librosController.editar);
router.post("/actualizar",cargar.single("archivo"),librosController.update);
router.get("/registroHerramienta", librosController.crearHerramienta);
router.post("/registroHerramienta", librosController.guardarHerramienta);


module.exports = router;