const Pract = require('../Models/Pract')

const PractData = async (req, res, next) => {
    try {
        const data = new Pract(req.body);
        await data.save()
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PractData }