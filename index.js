/**
 * importing required modules 
 */
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const pocRoutes = require('./routes/pocRoutes')
const userRoutes = require('./routes/userRoutes')
const teamRoutes = require('./routes/teamRoutes')
const roleRoutes = require('./routes/roleRoutes')
const authRoutes = require('./routes/authRoutes')
const pocHistoryRoutes = require('./routes/pocHistoryRoutes')
const mongoose = require('./config/database.js')
const validateUser = require('./authentication')

/**
 * mongodb error console
 */ 
mongoose.connection.on('error', console.error.bind(console, 'Mongoose Connection Error'))

/**
 * express use bodyparser and cors setting 
 * setting secret Key for JWT
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.set('secretkey', 'pocforum')

/**
 * routing paths
 */
app.use('/auth/v1',authRoutes)
 
app.use('/user/v1', userRoutes)

app.use('/poc/v1',validateUser, pocRoutes)

app.use('/role/v1',validateUser,roleRoutes)

app.use('/team/v1',validateUser,teamRoutes)

app.use('/pocHistory/v1',pocHistoryRoutes)


/** 
 * handle 404 error
 */ 
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/** 
 * handle errors
 */ 
app.use(function (err, req, res) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({
            message: "Not found"
        });
    else
        res.status(500).json({
            message: "Something looks wrong !!!"
        });
});

/**
 * server will serve in 8080 port if env.port is not available
 */
app.listen(process.env.PORT || 8080, function () {
    console.log('Node server listening on port 8080');
});