const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port, ()=>{
        console.log("Connected MongoDB and Server run on port", port);
    })
})
.catch((err) => console.log(err))

