const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 100,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);