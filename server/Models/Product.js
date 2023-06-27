const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  images: [{
    type: String,
    required: true
  }],
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productDetails: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Product', productSchema)
