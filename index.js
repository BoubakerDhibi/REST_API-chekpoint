//import express
const express = require("express");

//import connectDB
const connectDB = require("./config/connectDB")

//import user from routes
const user = require("./routes/user")


//initiate express
const app = express()


//4-parse database
app.use(express.json())



//3-define routes
app.use("/api/bkr/newusers", user)

//2-connect database
connectDB()

//1-run server
const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`THE SERVER IS RUNNING ON PORT ${port}`)
})