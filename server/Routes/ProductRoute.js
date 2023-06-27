const express = require('express');
const router = express.Router();
const { PostProduct, GetProduct, GetProductById } = require('../Controllers/Product');
const { postComment, updateCommentById, deleteCommentById,getAllCommentsForProduct }=require('../Controllers/Comment')
const protectedRoute = require('../Middleware/Middleware')


// router.use(protectedRoute)
router.post('/products', PostProduct);
router.get('/products', GetProduct);
router.get('/product/:id', GetProductById);

//comment
router.post('/postcomment',postComment);
router.delete('/deletecomment',deleteCommentById);
router.patch('/updatecomment',updateCommentById);
router.get('/getcomment/:id',getAllCommentsForProduct)

module.exports = router