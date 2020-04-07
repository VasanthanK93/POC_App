const express = require("express")
const bodyParser = require("body-parser")
const app = express()
// const users = require('./routes/userroutes.js')
const pocRoutes = require('./routes/pocRoutes')
const mongoose = require('./config/database.js')


mongoose.connection.on('error', console.error.bind(console, 'Mongoose Connection Error'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use('/users', users)

app.use('/poc', pocRoutes)


// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else
        res.status(500).json({ message: "Something looks wrong !!!" });
});

app.listen(8080, function () { console.log('Node server listening on port 80'); });