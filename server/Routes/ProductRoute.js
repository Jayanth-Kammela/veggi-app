const express = require('express');
const router = express.Router();
const { PostProduct, GetProduct, GetProductById } = require('../Controllers/Product');
const { postComment, updateCommentById, deleteCommentById, getAllCommentsForProduct } = require('../Controllers/Comment')
const protectedRoute = require('../Middleware/Middleware')
const { PostCart, GetCart, DeleteCart } = require('../Controllers/Cart')
const { PractData } = require('../Controllers/Pract')
const { PlaceOrder, GetOrder } = require('../Controllers/Order')


// router.use(protectedRoute);
router.post('/products', PostProduct);
router.get('/products', GetProduct);
router.get('/product/:id', GetProductById);

//comment
router.post('/postcomment', postComment);
router.delete('/deletecomment', deleteCommentById);
router.patch('/updatecomment', updateCommentById);
router.get('/getcomment/:id', getAllCommentsForProduct);

//cart
router.post('/addcart', PostCart);
router.get('/getcart', GetCart);
router.delete('/deletecart/:id', DeleteCart);

//pract
router.post('/pract', PractData);

//order
router.post('/placeorders', PlaceOrder);
router.get('/getorders', GetOrder);

module.exports = router