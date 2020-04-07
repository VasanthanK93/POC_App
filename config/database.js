const mongoose = require("mongoose")
const mongodb = 'mongodb://admin:admin@poc-details-shard-00-00-mzyfx.gcp.mongodb.net:27017,poc-details-shard-00-01-mzyfx.gcp.mongodb.net:27017,poc-details-shard-00-02-mzyfx.gcp.mongodb.net:27017/POCDetails?ssl=true&replicaSet=POC-Details-shard-0&authSource=admin&retryWrites=true&w=majority'

// const mongodb = 'mongodb://localhost:27017/POCDetails'

mongoose.connect(mongodb, { useNewUrlParser: true,useUnifiedTopology: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;