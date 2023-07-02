const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String },
    nested: [{
        firstName: { type: String },
        lastName: { type: String }
    }]
});

module.exports = mongoose.model('Pract', productSchema)
