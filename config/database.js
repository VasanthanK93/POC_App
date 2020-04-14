/**
 * importing required modules 
 */
const mongoose = require("mongoose")
const mongodb = 'mongodb://admin:admin@poc-details-shard-00-00-mzyfx.gcp.mongodb.net:27017,poc-details-shard-00-01-mzyfx.gcp.mongodb.net:27017,poc-details-shard-00-02-mzyfx.gcp.mongodb.net:27017/POCDetails?ssl=true&replicaSet=POC-Details-shard-0&authSource=admin&retryWrites=true&w=majority'

/**
 * connecting to Mongodb through mongoose 
 */
mongoose.connect(mongodb, { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false});

mongoose.Promise = global.Promise;

module.exports = mongoose;