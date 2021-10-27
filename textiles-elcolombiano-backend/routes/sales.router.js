
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { salesController } = require('../controllers');

router.get('/:id', salesController.getSale);

router.get('/', salesController.getSales);

router.post('/',
    body('codProduct', 'Código del producto es requerido').exists(),
    body('price', 'El precio es requerido y debe ser numerico').exists(),
    body('quantity', 'La cantidad es requerida y debe ser numerico').exists(),
    body('nameCustomer', 'nombreCliente es requerido').exists(),
    body('idCustomer', 'idCliente es requerido').exists(),
    body('idSeller', 'idVendedor es requerido').exists(),
    body('totalPrice', 'El valor es requerido y debe ser numerico').exists(),
    salesController.createSale);

router.put('/:id',
    body('codProduct', 'Código del producto es requerido').exists(),
    body('quantity', 'La cantidad es requerida y debe ser numerico').exists(),
    body('price', 'El precio es requerido y debe ser numerico').exists(),
    body('nameCustomer', 'nombreCliente es requerido').exists(),
    body('idCustomer', 'idCliente es requerido').exists(),
    body('idSeller', 'idVendedor es requerido').exists(),
    body('totalPrice', 'El valor es requerido y debe ser numerico').exists(),
    salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

module.exports = router;