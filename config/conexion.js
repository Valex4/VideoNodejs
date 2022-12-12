let mysql = require("mysql");
let con = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: "root",
    password: "",
    database: "miLittlePlant"
});

con.connect(
    (err)=>{
        if (!err) {
            console.log("conexion exitosa");

        }else{
            console.log("Error de conexion");
        }
    }
);

module.exports =con;