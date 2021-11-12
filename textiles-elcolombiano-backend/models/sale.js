const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = Schema({
    codProduct: {
        type: String,
        require: true
    },
    price: {
       type: Number,
       require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },    
    nameCustomer: {
        type: String,
        require: true
    },
    idCustomer: {
        type: String,
        require: true
    },
    idSeller: {
        type: String,
        require: true
    },
    saleDate: {
        type: Date,
        default: Date
    },
    totalPrice: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('sales', SaleSchema);