const { db } = require("../cnn")

const getFactura = async (req, res) => { try{
    const response = await db.any("select * from factura;")
    res.json(response)
} catch (error) {
    res.json({
        message: 'Error detectado al consultar factura:'
    })
}
}

const getFacturabyID = async (req, res) => {try{
    const id_factura = req.params.id_factura
    const response = await db.any("SELECT * FROM factura WHERE id_factura=$1", [id_factura])
    res.json(response)
} catch (error) {
    res.json({
        message: 'Error detectado al consultar factura ID:'
    })
}
}

const getFacturabyCedulaCli = async (req, res) => {try{
    const cedula_cli = req.params.cedula_cli
    const response = await db.any("SELECT * FROM factura WHERE cedula_cli=$1", [cedula_cli])
    res.json(response)
} catch (error) {
    res.json({
        message: 'Error al ingresar al consultar facturas cedula:'
    })
}
    
}

const createFactura = async (req, res) => {
    try {
        const { id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total } = req.query
        const response = await db.query("INSERT INTO factura(id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total) VALUES ($1, $2, $3, $4, $5, $6);", [id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total])
        res.json({
            message: 'Factura ingresada correctamente',
            body: {
                factura: { id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error al ingresar facturas:'
        })
    }
}
const updateFactura = async (req, res) => {
    try {
        const { id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total } = req.query
        const response = await db.query("UPDATE factura SET id_factura=$1, cedula_cli=$2, nombre_cli=$3, apellido_cli=$4, detalle_fac=$5, valor_total=$6 WHERE id_factura=$1;", [id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total])
        res.json({
            message: "Factura actualizada correctamente",
            body: {
                facturas: { id_factura, cedula_cli, nombre_cli, apellido_cli, detalle_fac, valor_total }
            }
        })
    } catch (error) {
        res.json({
            message: "Error al actualizar factura"
        })
    }

}

const deleteFactura = async (req, res) => {
    try {
        const { id_factura } = req.query
        const response = await db.query("DELETE FROM factura WHERE id_factura=$1;", [id_factura])
        res.json({
            message: "Factura eliminada correctamente",
            body: {
                facturas: { id_factura }
            }
        })
    } catch (error) {
        res.json({
            message: 'Error al eliminar factura:'
        })
    }
}

module.exports = {
    getFactura,
    getFacturabyID,
    getFacturabyCedulaCli,
    createFactura,
    updateFactura,
    deleteFactura
}