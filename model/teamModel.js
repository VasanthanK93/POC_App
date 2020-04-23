/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/**
 * schema declaration for POC collection 
 */
const teamSchema = new Schema({
    teamId: String,
    teamName: String
})

module.exports = mongoose.model('teams', teamSchema, 'teams')