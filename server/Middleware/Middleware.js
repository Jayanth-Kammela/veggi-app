const jwt = require("jsonwebtoken");
const User = require('../Models/User')

const protectRoute = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ message: "Require is not authorzation" });
  }
};

module.exports = protectRoute;

