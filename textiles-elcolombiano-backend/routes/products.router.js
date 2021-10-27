/*importando el modulo Router de express para definir las rutas
del crud de productos*/
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
/*importando el controlador de los productos, encargado de gestionar
la interaccion entre las peticiones HTTP y la base de datos*/
const { productsController } = require('../controllers');


router.get('/:id', productsController.getProduct);

router.get('/', productsController.getProducts);

//escribiendo las reglas que deben cumplir los parametros para crear un producto
router.post('/',
    body('price', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('description', 'La descripción del producto es requerida').exists(),
    body('state', 'El estado del producto es requerido(true/false)').isBoolean().exists(),
    productsController.createProduct);

//escribiendo las reglas que deben cumplir los parametros para actualizar un producto               
router.put('/:id',
    body('price', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('description', 'La descripción del producto es requerida').exists(),
    body('state', 'El estado del producto es requerido(true/false)').isBoolean().exists(),
    productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;