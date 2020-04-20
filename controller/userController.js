/**
 * importing required modules 
 */
const userModel = require('../model/userModel')

module.exports = {
    register : async(req,res)=>{
        let finduser = await userModel.findOne({ userName: req.body.userName });
            if (!finduser) {
                let userData = new userModel(req.body)
                let createUser = await userModel.create(userData);
                return res.json({ status: "success", message: "User Created successfully!!!", data: createUser })
            }
            res.json({ status: "error", message: "User Already Available!!!", data: null })
        },

        authenticate : async(req,res)=>{
            let finduser = await userModel.findOne({ userName: req.body.userName})
            if (!finduser) {
                res.send({ Status: "error", message: "user is not available" })
            } else {
                if (req.body.password == finduser.password) {
                    return res.json({ status: "Success", message: "user is authenticated successfully" , data: { user: finduser } })
                }
                res.json({ status: "error", message: "Invalid LoginID/Password", data: null })
            }
        }
    }