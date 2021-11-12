const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    fullName: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    },
    email: {
        type: 'string',
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    role: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    },
    state: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    }
})

module.exports = mongoose.model('users', UserSchema);