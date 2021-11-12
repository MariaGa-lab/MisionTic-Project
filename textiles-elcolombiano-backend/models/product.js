const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    nameProduct: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    state: {
        type: 'Boolean',
        require: true
    }
})

module.exports = mongoose.model('products', ProductSchema);