const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    productquantity: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Cart', CartSchema)