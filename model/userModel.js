/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for user collection 
 */
const userSchema = new Schema({
    userName: String,
    password: String,
    role: String,
    teams: Array,
    userActive: Boolean,
    isUserApproved: Boolean,
    createdDate: Date,
    modifiedDate: Date
})

module.exports = mongoose.model('userManagement', userSchema, 'userManagement')