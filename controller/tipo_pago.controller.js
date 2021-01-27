const { db } = require("../cnn")

const getTipoPago = async (req, res) => {try{
    const response = await db.any("select * from tipos_pago;")
    res.json(response)
} catch (error) {
    res.json({
        message: 'Error detectado al consultar tipos de pagos:'
    })
}
}

//Consulta de Tipo de pago por codigo de pago
const getTipoPagoByName = async (req, res) => {
    try {
        const codigo_pago = req.params.codigo_pago
        const response = await db.any("select * from tipos_pago WHERE codigo_pago = $1;", [codigo_pago])
        res.json(response)
    } catch (error) {
        res.json({
            message: 'Error detectado al consultas tipos de pagos por nombre:'
        })
    }
}

//Crear tipo de pago
const createTipoPago = async (req, res) => {
    try {
        const { codigo_pago, nombre_tp, estado } = req.query
        const response = await db.query('insert into tipos_pago(codigo_pago,nombre_tp,estado) values ($1,$2,$3)', [codigo_pago, nombre_tp, estado]);
        res.json({
            message: 'Tipo Pago creada correctamente',
            body: {
                tipos_pagos: { codigo_pago, nombre_tp, estado }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error detectado al crear tipos de pagos:'
        })
    }
}

//Actualizar tipo de pago
const updateTipoPago = async (req, res) => {
    try {
        const { codigo_pago, nombre_tp, estado } = req.query
        const response = await db.query("UPDATE tipos_pago SET nombre_tp=$2,estado=$3 WHERE codigo_pago=$1;", [codigo_pago, nombre_tp, estado])
        res.json({
            message: "Tipo_pago actualizada correctamente",
            body: {
                tipos_pagos: { codigo_pago, nombre_tp, estado }
            }
        })

    } catch (error) {
        res.json({
            message: 'Error detectado actualizar tipos de pagos:'
        })
    }
}

//Borrar tipo de pago
const deleteTipoPago = async (req, res) => {
    try {
        const { codigo_pago } = req.query
        const response = await db.query('delete from tipos_pago where codigo_pago = $1;', [codigo_pago]);
        res.json({
            message: "Pago eliminada correctamente",
            body: {
                tipos_pagos: { codigo_pago }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error detectado eliminar tipos de pagos:'
        })
    }
}

module.exports = {
    getTipoPago,
    getTipoPagoByName,
    createTipoPago,
    updateTipoPago,
    deleteTipoPago
}