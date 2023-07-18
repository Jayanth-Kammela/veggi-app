const OrderProduct = require('../Models/Order');
// const Cart = require('../Models/Cart')

const PlaceOrder = async (req, res, next) => {
    const { productId, productPrice, productquantity, paymentType } = req.body
    const userId = req.user._id.toString();


    try {
        // const data = new OrderProduct(req.body);
        const data = new OrderProduct({ productId, productPrice, productquantity, paymentType, userId });
        await data.save()
        // const address = new AddressModel({ ...req.body, user: userId });
        // await address.save();
        // await Cart.deleteMany({ productId })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const GetOrder = async (req, res, next) => {
    try {
        const data = await OrderProduct.find({}).populate('products', 'images productName').populate('userDeliveryAddress', 'doorNumber');;
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { PlaceOrder, GetOrder }