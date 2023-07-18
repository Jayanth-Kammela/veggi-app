const Product = require('../Models/Product')

const PostProduct = async (req, res, next) => {
    try {
        const data = new Product(req.body);
        await data.save()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const GetProduct = async (req, res, next) => {
    try {
        const data = await Product.find({})
        return res.status(200).json({whole:data})
    } catch (error) {
        return res.status(500).json(error);
    }
}

const GetProductById = async (req, res, next) => {
    try {
        var { id } = req.params
        // console.log(id);
        const data = await Product.findOne({ _id: id.toString() })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { PostProduct, GetProduct, GetProductById }