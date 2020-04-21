/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// mongoose.connection.on('open', function (ref) {
//     console.log('Connected to mongo server.');
//     //trying to get collection names
//     mongoose.connection.db.listCollections().toArray(function (err, names) {
//         console.log(names); // [{ name: 'dbname.myCollection' }]
//         module.exports.Collection = names;
//     });
// })

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
    deleteStatus: Boolean
})

module.exports = mongoose.model('POC', pocSchema, 'POC')