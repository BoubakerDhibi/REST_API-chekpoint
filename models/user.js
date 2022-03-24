//import mongoose
const mongoose = require("mongoose");

//define schema
const schema = mongoose.Schema

//create a new schema
const userSchema = new schema({
    name:{type:String, required:true},
    gender:{type:String, required:true},
    city: String,
    occupation:{type:String,required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    languages:{type:[String], required:true},
    hasVisaCard: Boolean,
    birthdate: Date,
    github:String,
    hobbies: [String]
})


//export module
module.exports = user = mongoose.model("user", userSchema)