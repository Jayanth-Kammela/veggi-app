const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: [0,'Rating should be more than 0'],
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);;
