const Cart = require('../Models/Cart')

const PostCart = async (req, res, next) => {
    const { productId, productquantity } = req.body;
    const userId = req.user._id.toString();
    try {
        const findProduct = await Cart.findOne({ productId: productId });
        if (findProduct) {
            return res.status(400).json('product already in cart')
        } else {
            const postCart = new Cart({ productId: productId, productquantity: productquantity, userId: userId })
            postCart.save();
            return res.status(200).json(postCart)
        }

    } catch (error) {
        return res.status(500).json(error);
    }
}

const GetCart = async (req, res, next) => {
    const userId = req.user._id.toString();
    try {
        const cart = await Cart.find({ userId }).populate('productId', 'images quantity price productName')
        return res.status(200).json(cart)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const DeleteCart = async (req, res, next) => {
    const { id } = req.params
    try {
        const cart = await Cart.findByIdAndDelete({ _id: id });
        return res.status(200).json(cart)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { PostCart, GetCart, DeleteCart }