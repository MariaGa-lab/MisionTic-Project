const { Router } = require('express');
const router = Router();
const SaleSchema = require('../models/sale');
const { validationResult } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');

// GET Todos las ventas
router.get('/', async (req, res) => {
    try {
        const sales = await SaleSchema.find();
        res.status(200).json({ data: sales });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// GET Venta por ID
router.get('/:id', async (req, res) => {
    try {
        const sale = await SaleSchema.findById(req.params.id);
        res.status(200).json({ data: sale });
    }
    catch (err) {
        res.status(400).json({status: "Venta no encontrada" + err.message})
    }
});

// POST Crear nueva venta
router.post('/', async (req, res) => {
    //verificando que si hay errores en los parametros de la solictud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //si existen errores damos una respuesta erronea
        res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let sale = new SaleSchema(req.body);
    try {
        await sale.save();
        res.status(201).json({ data: sale });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// PUT Actualizar venta por ID
router.put('/:id', async (req, res) => {
    try {
        let newSale = {
            id: req.params.id,
            codProduct: req.body.codProduct,
            price: req.body.price,
            quantity: req.body.quantity,
            nameCustomer: req.body.nameCustomer,
            idCustomer: req.body.idCustomer,
            idSeller: req.body.idSeller,
            totalPrice: req.body.totalPrice
        }
        await SaleSchema.findByIdAndUpdate(req.params.id, newSale);
        res.status(201).json({ data: newSale })
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// DELETE Borrar venta por ID
router.delete('/:id', async (req, res) => {
    try {
        let result = await SaleSchema.findByIdAndRemove(req.params.id);
        res.status(200).json({ data: result });
    }
    catch (err) {
        res.status(400).json({status: "Venta no encontrada" + err.message})
    }
});

module.exports = router;