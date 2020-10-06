const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {userType} = require("../../utils/enum");

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true , unique: true},
    phone: {type: String, required: true , unique: true},
    password: {type: String},
    isloggedin: {type: Boolean,default: true},
    addedDate: {type: Date, required: true, default: new Date()},
    lastActive: {type: Date, required: true, default: new Date()},
});


module.exports = mongoose.model('user', userSchema, 'user');
