/**
 * importing required modules 
 */
const jwt = require("jsonwebtoken")

/**
 * function for validating the JWT token
 */
const validateUser = async (req, res,next)=>{
   await jwt.verify(req.headers['x-access-token'],req.app.get('secretkey'),(err,decoded)=>{
    if (err) {
        res.json({ Status: "error", message: err.message, data: null })
    } else {
        req.body.userid = decoded.id;
        next();
    }
   })
}

module.exports = validateUser