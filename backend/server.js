const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const donarDetailsRoute = require("./routes/donarDetailsRoute")

const port = process.env.PORT || 8000;

const app = express();

// middleware
app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

app.use(cors());
app.use(express.json());
app.use("/api/bloodDonar", donarDetailsRoute);



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port, ()=>{
        console.log("Connected MongoDB and Server run on port", port);
    })
})
.catch((err) => console.log(err))

