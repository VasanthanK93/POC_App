/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for POC collection 
 */
const roleSchema = new Schema({
    roleId: String,
    role: String,
    roleDesc: String
})

module.exports = mongoose.model('roles', roleSchema, 'roles')