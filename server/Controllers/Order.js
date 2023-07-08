const OrderProduct = require('../Models/Order');
const Cart = require('../Models/Cart')

const PlaceOrder = async (req, res, next) => {
    const { productId, productPrice, productquantity, paymentType } = req.body
    try {
        // const data = new OrderProduct(req.body);
        const data = new OrderProduct({ productId, productPrice, productquantity, paymentType });
        await data.save()
        await Cart.deleteMany({ productId })
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

const GetOrder = async (req, res, next) => {
    try {
        const data = await OrderProduct.find({}).populate('products','images productName');
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PlaceOrder, GetOrder }