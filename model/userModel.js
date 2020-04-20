/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for POC collection 
 */
const userSchema = new Schema({
    userName : String,
    password: String,
    role : String,
    teams : Array
})

module.exports = mongoose.model('userManagement', userSchema,'userManagement')