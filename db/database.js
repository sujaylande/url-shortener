const mongoose = require("mongoose");

const connectDB = async () =>{
    mongoose
    .connect("mongodb://localhost:27017/urlshortener")
    .then(()=>{console.log("db connected!")})
    .catch((err)=>{console.log("error in db connection", err)})
}

module.exports = connectDB;
