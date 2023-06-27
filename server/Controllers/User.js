const userModel = require("../Models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const forLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.login(email, password);
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const forSignup = async (req, res) => {
    const { email, password } = req.body;

    // const salt=bycryt.salt(10)
    // const hash=bycryt.hash(password,salt)

    try {
        const user = await userModel.signup(email, password);
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { forLogin, forSignup };