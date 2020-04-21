/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for sequenceGenerator collection 
 */
const sequenceSchema = new Schema({
    team: String,
    nextId: Number
})

module.exports = mongoose.model('sequenceGenerator', sequenceSchema, 'sequenceGenerator')