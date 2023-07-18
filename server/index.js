const express = require('express');
const cors = require("cors");
const app = express();
require("dotenv").config();
const dbConnection = require('./db/dbconnect');
const productRoute = require('./Routes/ProductRoute')
const usersRoute = require('./Routes/UserAuth')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnection()

app.use('/users', usersRoute);
app.use('/ecom', productRoute);

app.listen(process.env.PORT, () => {
    console.log(`server running on ${process.env.PORT}`);
})