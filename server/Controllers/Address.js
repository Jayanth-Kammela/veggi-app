const AddressModel = require("../Models/Address");

const addAddress = async (req, res, next) => {
    const userId = req.user._id.toString()
    try {
        const address = new AddressModel({ ...req.body, user: userId });
        await address.save();
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getAddress = async (req, res, next) => {
    const userId = req.user._id.toString()
    console.log(userId);
    try {
        const address = await AddressModel.find({ user: userId }).populate('user', 'fullname')
        return res.status(200).json(address)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateAddressById = async (req, res) => {
    const { id } = req.params
    const {userAddressName,doorNumber,street,village,pinCode,mobileNumber,addressType}=req.body
    try {
        const Address = await AddressModel.findByIdAndUpdate({ _id: id }, { $set: {userAddressName,doorNumber,street,village,pinCode,mobileNumber,addressType} }, { new: true });
        if (!Address) {
            return res.status(404).json(error);
        }
        return res.status(200).json('Updated Address');
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { addAddress, getAddress, updateAddressById }