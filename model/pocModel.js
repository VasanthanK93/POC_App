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

const pocListSchema = new Schema({
    id:Number,
    pocDesc:String,
    wikiLink:String,
    status:String,
    remarks:String,
    deleteStatus : Boolean
})

const pocSchema = new Schema({
    team: String,
    pocList: [pocListSchema]
})

module.exports = mongoose.model('POC', pocSchema,'POC')