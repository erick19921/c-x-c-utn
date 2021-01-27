const pgPromise = require("pg-promise")
const config = {
    host:"localhost",
    port:"5432",
    database:"respaldo",
    user:"postgres",
    password:"3434"
}
const pgp = pgPromise({})
const db = pgp(config)

//db.any("select * from usuario WHERE tipo_usuario='Administrador'").then(res => {console.log(res)})
db.any("select * from factura").then(res => {console.log(res)})
db.any("select * from pagos_clientes").then(res => {console.log(res)})
db.any("select * from tipos_pago").then(res=>{console.log(res)})
db.any("select * from usuario").then(res=>{console.log(res)})

exports.db=db;