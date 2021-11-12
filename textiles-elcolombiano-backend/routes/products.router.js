//importando el modulo Router de express para definir las rutas del crud de productos
const { Router } = require('express');
const router = Router();
//Importando el modelo de Base de datos de los productos
const ProductSchema = require('../models/product');
const { validationResult } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');

// GET Todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await ProductSchema.find();
        res.status(200).json({ data: products });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// GET Producto por ID
router.get('/:id',  async (req, res) => {
    try {
        let product = await ProductSchema.findById(req.params.id);
        res.status(200).json({ data: product });
    }
    catch (err) {
        res.status(400).json({status: "Producto no encontrado" + err.message})
    }
});

// POST Crear nuevo producto
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
    let product = new ProductSchema(req.body);
    try {
        await product.save();
        res.status(201).json({ data: product });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// PUT Actualizar producto por ID            
router.put('/:id', async (req, res) => {
    try {
        let newProduct = {
            id: req.params.id,
            nameProduct: req.body.nameProduct,
            price: req.body.price,
            description: req.body.description,
            state: req.body.state
        }
        await ProductSchema.findByIdAndUpdate(req.params.id, newProduct);
        res.status(201).json({ data: newProduct })
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// DELETE Borrar producto por ID
router.delete('/:id', async (req, res) => {
    try {
        let result = await ProductSchema.findByIdAndRemove(req.params.id);
        res.status(200).json({ data: result });
    }
    catch (err) {
        res.status(400).json({status: "Producto no encontrado" + err.message})
    }
});

module.exports = router;