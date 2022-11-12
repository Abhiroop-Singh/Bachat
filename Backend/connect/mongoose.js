const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/bachat"

const connectDB = async()=>{
    mongoose.connect(uri,()=>{
        console.log("Connected to mongo");
    })
}

module.exports = connectDB;