const mongoose = require('mongoose')

const AddressSchema = mongoose.Schema({
    userAddressName: {
        type: String,
        required: true,
        trim: true,
    },
    doorNumber: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    village: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    addressType: {
        type: String,
        required: true,
        enum: ["Home", "Work"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
});

module.exports = mongoose.model('Address', AddressSchema)