/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for POC collection 
 */
const pocSchema = new Schema({
    team: String,
    pocId: String,
    pocDesc: String,
    wikiLink: String,
    status: String,
    remarks: String,
    createdDate: Date,
    modifiedDate: Date
})

module.exports = mongoose.model('POC', pocSchema, 'POC')