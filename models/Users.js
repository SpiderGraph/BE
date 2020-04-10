const mongoose = require('mongoose')


const UserShema = mongoose.Schema({
    username: {
        required: true,
        type: String,
        min: 6,
        max: 128
    },
    password: {
        required: true,
        type: String,
        min: 6,
        max: 128
    }
})

module.exports = mongoose.model('Users ', UserShema)