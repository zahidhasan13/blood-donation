const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const requireAuth = async (req, res, next)=> {
const {authorization} = req.headers;

if(!authorization){
    res.status(401).json({Error: "Authorization token required"});
}

const token = authorization.split(" ")[1];

try{
    const {id} = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findOne({_id: id}).select("_id");

    next();

}catch(er){
    res.status(401).json({Error: "Token is not Authorized"})
}

}

module.exports = requireAuth
