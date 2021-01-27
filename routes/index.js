const { Router } = require("express") //declaro mi ruta
const router = Router()

//Cinthya
const { getUsuario,
    getUsuarioByTipo,
    getUsuarioByCedula,
    createUsuario,
    updateUsuario,
    deleteUsuario
} = require("../controller/usuario.controller")

router.get("/usuario", getUsuario) //endpoint del listado de pizzas
router.get("/usuario/:tipo_usuario", getUsuarioByTipo) // Buscar por Tipo usuario cliente/administrador
router.get("/usuario/:cedula", getUsuarioByCedula) // Buscar por cedula
router.post("/usuario", createUsuario)
router.put("/usuario", updateUsuario)
router.delete("/usuario", deleteUsuario)

//Anthony
const { getFactura,
    getFacturabyID,
    getFacturabyCedulaCli,
    createFactura,
    updateFactura,
    deleteFactura 
} = require('../controller/factura.controller')

router.get("/factura", getFactura)
    router.get("/factura/:id_factura", getFacturabyID)
    router.get("/factura/:cedula_cli", getFacturabyCedulaCli)
    router.post("/factura", createFactura)
    router.put("/factura", updateFactura)
    router.delete("/factura", deleteFactura)

//Diego
const { getPagoClientes,
    getPagoClientesByName,
    createPagoClientes,
    updatePagoClientes,
    deletePagoClientes
} = require("../controller/pago_clientes.controller")

router.get("/pago", getPagoClientes)
router.get("/pago/:id_pago_cliente", getPagoClientesByName)
router.post("/pago", createPagoClientes)
router.put("/pago", updatePagoClientes)
router.delete("/pago", deletePagoClientes)

//Ricardo
const {
    getTipoPago,
    getTipoPagoByName,
    createTipoPago,
    updateTipoPago,
    deleteTipoPago
} = require("../controller/tipo_pago.controller")

router.get("/TipoPago", getTipoPago)
router.get("/TipoPago/:codigo_pago", getTipoPagoByName)
router.post("/TipoPago", createTipoPago)
router.put("/TipoPago", updateTipoPago)
router.delete("/TipoPago", deleteTipoPago)

module.exports = router