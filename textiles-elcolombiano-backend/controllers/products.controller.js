//Importando el modelo de Base de datos de los productos
const ProductSchema = require('../models/product');
//importando la libreria que nos permite capturar los errores en el cuerpo de la solicitudes
const { validationResult } = require('express-validator');

const getProduct = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let product = await ProductSchema.findById(req.params.id);
            res.status(200).json({ data: product });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Producto no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

const getProducts = async (req, res) => {
    try {
        let products = await ProductSchema.find();
        res.status(200).json({ data: products });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createProduct = async (req, res) => {
    //verificando que si hay errores en los parametros de la solictud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //si existen errores damos una respuesta erronea
        return res.status(400).json({
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
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
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
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}


const deleteProduct = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await ProductSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Producto no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;