const Pract = require('../Models/Pract')

const PractData = async (req, res, next) => {
    const {nested,name}=req.body
    try {
        const data = new Pract({nested,name});
        await data.save()
        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { PractData }