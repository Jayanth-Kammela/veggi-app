const express = require('express');
const router = express.Router();
const { PostProduct, GetProduct, GetProductById } = require('../Controllers/Product');
const { postComment, updateCommentById, deleteCommentById, getAllCommentsForProduct } = require('../Controllers/Comment')
const protectedRoute = require('../Middleware/Middleware')
const { PostCart, GetCart, DeleteCart } = require('../Controllers/Cart')
const { PractData } = require('../Controllers/Pract')
const { PlaceOrder, GetOrder } = require('../Controllers/Order')
const { addAddress, getAddress, updateAddressById } = require('../Controllers/Address')


// router.use(protectedRoute);
router.post('/products', PostProduct);
router.get('/products', GetProduct);
router.get('/product/:id', GetProductById);

//comment
router.post('/postcomment', postComment);
router.delete('/deletecomment', protectedRoute, deleteCommentById);
router.patch('/updatecomment', protectedRoute, updateCommentById);
router.get('/getcomment/:id', getAllCommentsForProduct);

//cart
router.post('/addcart', protectedRoute, PostCart);
router.get('/getcart', protectedRoute, GetCart);
router.delete('/deletecart/:id', protectedRoute, DeleteCart);

//pract
router.post('/pract', PractData);

//order
router.post('/placeorders', protectedRoute, PlaceOrder);
router.get('/getorders', protectedRoute, GetOrder);

//address
router.post('/addaddress', protectedRoute, addAddress);
router.get('/getaddress', protectedRoute, getAddress);
router.patch('/updateaddress/:id', protectedRoute, updateAddressById);

module.exports = router