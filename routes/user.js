const router = require("express").Router()
let User = require("../models/user.model")

router.route("/users").get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: "+err))
})

router.route("/users").post((req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let role = req.body.role;
    let password = req.body.password;

    const newUser = new User({name, email, role, password })
    newUser.save()
    .then(() => res.json("User Added Successfully"))
    .catch(err =>res.status(400).send("Error: " +err))
})


router.route("/users/:id").get((req, res)=>{
    const {id} =  req.params;
    User.findById(id)
    .then(user=>{
        if(!user){
            res.status(404).send("No user found")
        }
        res.json(user)
    })
    .catch(err =>res.status(400).send("Error: " +err))
})


router.route("/users/:id").put((req, res)=>{
    const {id} =  req.params;
    User.findByIdAndUpdate(id)
    .then(user=>{
        if(!user){
            res.status(404).send("No user found")
        }
        res.send("user updated successfully")
    })
    .catch(err =>res.status(400).send("Error: " +err))
})

router.route("/users/:id").delete((req, res)=>{
    const {id} =  req.params;
    User.findByIdAndRemove(id)
    .then(user=>{
        if(!user){
            res.status(404).send("No Such A record exists")
        }
        res.send("User deleted Successfully")
    })
    .catch(err =>res.status(400).send("Error: " +err))
})


module.exports = router