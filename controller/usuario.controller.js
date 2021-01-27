
//Metodos para la tabla pago clientes

//Metodo listar datos
const { db } = require("../cnn")

const getUsuario = async (req, res) => {
    try {
        const response = await db.any("select * from usuario;")
        res.json(response)
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}

//consulta de usuarios por tipo: cajero/administrador 
const getUsuarioByTipo = async (req, res) => {
    try {
        const tipo = req.params.tipo
        const response = await db.any("select * from usuario WHERE tipo_usuario=$1;", [tipo])
        res.json(response)
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}
//consulta de usuarios por cedula 
const getUsuarioByCedula = async (req, res) => {
    try {
        const cedula = req.params.cedula
        const response = await db.any("select * from usuario WHERE cedula=$1;", [cedula])

        res.json(response)
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}

//crear usuario
const createUsuario = async (req, res) => {
    try {
        const { cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo } = req.query
        const response = await db.query('insert into usuario(cedula,nombre,apellido,nombre_usuario,contrasenia,tipo_usuario,fecha_nacimiento,ciudad_nacimiento,direccion,telefono,email,activo) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo]);
        res.json({
            message: 'Usuario creado correctamente',
            body: {
                usuario: { cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}


// actualizar Usiario
const updateUsuario = async (req, res) => {
    try {
        const { cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo } = req.query
        const response = await db.query("UPDATE usuario SET nombre=$2,apellido=$3,nombre_usuario=$4,contrasenia=$5,tipo_usuario=$6,fecha_nacimiento=$7,ciudad_nacimiento=$8,direccion=$9,telefono=$10,email=$11,activo=$12 WHERE cedula=$1;", [cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo])
        res.json({
            message: "Usuario actualizado correctamente",
            body: {
                usuario: { cedula, nombre, apellido, nombre_usuario, contrasenia, tipo_usuario, fecha_nacimiento, ciudad_nacimiento, direccion, telefono, email, activo }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}

//borrar pago clientes
const deleteUsuario = async (req, res) => {
    try {
        const { cedula } = req.query
        const response = await db.query('delete from usuario where cedula = $1;', [cedula]);
        res.json({
            message: "Usuario eliminado correctamente",
            body: {
                usuario: { cedula }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error detectado:'
        })
    }
}

module.exports = {
    getUsuario,
    getUsuarioByTipo,
    getUsuarioByCedula,
    createUsuario,
    updateUsuario,
    deleteUsuario
}