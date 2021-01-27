const pgPromise = require("pg-promise")
const config = {
    host:"ec2-54-205-248-255.compute-1.amazonaws.com",
    port:"5432",
    database:"d2ekg96sn2m8uu",
    user:"zttsxgiuobpkns",
    password:"5e1874412c937635995cc24c5eb96ec4fbc128c7469e64ffb42567650882891d"
}
const pgp = pgPromise({})
const db = pgp(config)

//db.any("select * from usuario WHERE tipo_usuario='Administrador'").then(res => {console.log(res)})
db.any("select * from factura").then(res => {console.log(res)})
db.any("select * from pagos_clientes").then(res => {console.log(res)})
db.any("select * from tipos_pago").then(res=>{console.log(res)})
//db.any("select * from usuario").then(res=>{console.log(res)})

exports.db=db;

