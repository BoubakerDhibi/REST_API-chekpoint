//import mongoose

const mongoose = require("mongoose")
//import config
const config = require("config")



//mongoose connection
const connectDB = () =>{
    mongoose.connect(config.get("MONGO_URI"), {useNewUrlParser:true, useUnifiedTopology:true})

    .then(console.log("DATABASE CONNECTED SUCCESSFULLY!"))
    .catch(err =>console.log(err))
}

//export module
module.exports = connectDB
