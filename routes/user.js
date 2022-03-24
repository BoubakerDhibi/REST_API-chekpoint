//import mongoose
const express = require("express")


//import user from models
const User = require("../models/user")

//define express.Router function
const router = express.Router()



//ADD A NEW USER USING POST METHOD
//API: localhost:5000/api/rihab/newusers
//TESTED VIA POSTMAN
router.post("/", (req, res) => {
    const newUser = new User({...req.body })
    newUser.save()

    .then((user) => res.send(user))
        .catch((err) => res.send(err))
})

//create a record of a model as example:
const createUser = new User({
    name: " bkr the nanny",
    gender: "male",
    city: "Gafsa",
    occupation: "",
    email: "bkr@gmail.com",
    phone: 0012345678989,
    languages: ["english", "french"],
    hasVisaCard: true,
    birthdate: "22-06-1989",
    github: "github.com/ bkr",
    hobbies: ["gossiping", "collecting scorpions"]
})
createUser.save()
console.log(createUser)



//RETURN ALL USERS USING GET METHOD
//API: localhost:5000/api/rihab/newusers
//TESTED VIA POSTMAN
router.get("/", (req, res) => {
    User.find()

    .then((users) => res.status(200).json(users))
        .catch(err => res.status(400).json(err))
})

//EDIT A USER BY ID USING PUT METHOD
//API: localhost:5000/api/rihab/newusers
//TESTED VIA POSTMAN
router.put("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndUpdate({ _id }, { $set: {...req.body } })

    .then(() => res.send("THIS USER HAS BEEN UPDATED SUCCESSFULLY!"))
        .catch(err => res.send(err))
})

//REMOVE A USER BY ID USING DELETE METHOD
//API: localhost:5000/api/rihab/newusers
//TESTED VIA POSTMAN
router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndRemove({ _id })

    .then(() => res.send("THIS USER HAS BEEN REMOVED SUCCESSFULLY!"))
        .catch(err => res.send(err))
})



//export router
module.exports = router