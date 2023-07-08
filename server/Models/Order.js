const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    paymentType: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productquantity: {
        type: String,
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
})

module.exports = mongoose.model('Orders', OrderSchema)