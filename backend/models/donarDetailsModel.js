const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donarDetailsSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
        min: 18
    },
    gender:{
        type: String,
        enum: ["male", "female", "others"],
        required: true
    },
    bloodGroup:{
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        required: true
    },
    address:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10,15}$/, "Please enter a valid phone number"],
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("donarDetails", donarDetailsSchema);