
//Metodos para la tabla pago clientes

//Metodo listar datos
const { db } = require("../cnn")

const getPagoClientes = async (req, res) => {
    try {
        const response = await db.any("select * from pagos_clientes;")
        res.json(response)
    } catch (error) {
        res.json({
            message: 'Error detectado al realizar insert de pago clientes:'
        })
    }
}

    //consulta de pago clientes por ID de pagos
    const getPagoClientesByName = async (req, res) => {
        try {
            const id_pago_cliente = req.query
            const response = await db.any("select * from pagos_clientes WHERE id_pago_cliente=$1;", [id_pago_cliente])
            res.json(response)
        } catch (error) {
            res.json({
                message: 'Error detectado al realizar insert de pago clientes:'
            })
        }
    }

    //crear pago clientes
    const createPagoClientes = async (req, res) => {
        try {
            const { id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura } = req.query
            const response = await db.query('insert into pagos_clientes(id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura) values ($1,$2,$3,$4,$5,$6,$7)',
                [id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura]);
            res.json({
                message: 'Pago de clientes creado correctamente',
                body: {
                    pagos_clientes: { id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura }
                }
            })
        } catch (error) {
            res.json({
                message: 'Error detectado al realizar insert de pago clientes:'
            })
        }
    }


    // actualizar pago clientes
    const updatePagoClientes = async (req, res) => {
        try {
            const { id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura } = req.query
            const response = await db.query("UPDATE pagos_clientes SET id_pago_cliente=$1,id_factura=$2,codigo_pago=$3,descripcion=$4,numero_cuenta=$5,valor_pago=$6,valor_factura=$7 WHERE id_pago_cliente=$1;", [id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura])
            res.json({
                message: "Pagos clientes actualizada correctamente",
                body: {
                    pago_clientes: { id_pago_cliente, id_factura, codigo_pago, descripcion, numero_cuenta, valor_pago, valor_factura }
                }
            })
        } catch (error) {
            res.json({
                message: 'Error detectado al actualizar pago clientes:'
            })
        }
    }


    //borrar pago clientes
    const deletePagoClientes = async (req, res) => {
        try {
            const { id_pago_cliente } = req.query
            const response = await db.query('delete from pagos_clientes where id_pago_cliente = $1;', [id_pago_cliente]);
            res.json({
                message: "Pago Cliente eliminado correctamente",
                body: {
                    pago_cliente: { id_pago_cliente }
                }
            })
        } catch (error) {
            res.json({
                message: 'Error detectado al eliminar pago clientes:'
            })
        }
    }

    module.exports = {
        getPagoClientes,
        getPagoClientesByName,
        createPagoClientes,
        updatePagoClientes,
        deletePagoClientes
    }