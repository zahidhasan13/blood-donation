const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    },
})

userSchema.statics.signup = async function (email, password) {
    if(!validator.isEmail(email)){
        throw Error("Invalid email")
    }

    if(!validator.isStrongPassword(password)){
        throw Error( "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.")
    }

    const exist = await this.findOne({email})

    if(exist){
        throw Error("User already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash})

    return user;

}

module.exports = mongoose.model("User", userSchema)