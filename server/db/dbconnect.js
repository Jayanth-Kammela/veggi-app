const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true})
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection