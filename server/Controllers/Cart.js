const Cart = require('../Models/Cart')

const PostCart = async (req, res, next) => {
    try {
        const { productId, productquantity } = req.body;
        const findProduct = await Cart.findOne({ productId: productId });
        if (findProduct) {
            return res.status(400).json('product already in cart')
        } else {
            const postCart = new Cart({ productId: productId, productquantity: productquantity })
            postCart.save()
            return res.status(200).json(postCart)
        }
    } catch (error) {
        console.log(error);
    }
}

const GetCart = async (req, res, next) => {
    try {
        const cart = await Cart.find({}).populate('productId','images quantity price productName')
        return res.status(200).json(cart)
    } catch (error) {
        console.log(error);
    }
}

const DeleteCart = async (req, res, next) => {
    const { id } = req.params
    try {
        const cart = await Cart.findByIdAndDelete({ _id: id });
        return res.status(200).json(cart)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PostCart, GetCart, DeleteCart }