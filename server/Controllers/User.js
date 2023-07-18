const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const forLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        return res.status(200).json({ email, token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const forSignup = async (req, res) => {
    const { email, password, fullname, gender, mobileNumber } = req.body;

    // const salt=bycryt.salt(10)
    // const hash=bycryt.hash(password,salt)

    try {
        const user = await UserModel.signup(email, password, fullname, gender, mobileNumber);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const userGet = async (req, res) => {
    try {
        const user = await UserModel.find({})
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = { forLogin, forSignup, userGet };