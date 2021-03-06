const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/Users')


// register
router.post('/register', validateUser, hashPassword, (req, res) => {
    const body = req.body
    const user = new Users(body)
    user.save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({error: "There was an error while saving the user to the database."}))
})

// login
router.post('/login', validateCredentials, (req, res) => {
    const {username, password} = req.body
    Users.findOne().where({username: username})
    .then(data => {
        if(data && bcrypt.compareSync(password, data.password)){
            const token = generateToken(data)
            res.status(200).json(token)
        }else{
            res.status(400).json({errorMessage: "Invalid credentials"})
        }
    })
    .catch(err => res.status(400).json({errorMessage: "Invalid credentials"}))
})

function validateCredentials(req, res, next){
    const {username, password} = req.body
    if(username && password){
        next()
    }else{
        res.status(400).json({errorMessage: "No credentials"})
    }
}

function validateUser(req, res, next){
    const {username, password} = req.body
    if(username && password){
        Users.find().where({username: username})
        .then(data => {
            if(data.length){
                res.status(400).json({errorMessage: "Username already exists."})
            }else{
                next()
            }
        }) 
    }
}

function hashPassword(req, res, next) {
    const user = req.body;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) res.status(500).json({error: err});
        if (hash) {
            user.password = hash;
            next();
        }
    });
}

function generateToken(user) {
    const payload = {
        subject: user._id,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, process.env.API_SECRET, options);
}


module.exports = router