/**
 * importing required modules 
 */
const userModel = require('../model/userModel')

module.exports = {

/**
 * registering new user to userManagement Collection
 * request body is required : user Data
 */
    register : async(req,res)=>{
        let finduser = await userModel.findOne({ userName: req.body.userName });
            if (!finduser) {
                let userData = new userModel(req.body)
                let createUser = await userModel.create(userData);
                return res.json({ status: "success", message: "User Created successfully!!!", data: createUser })
            }
            res.json({ status: "error", message: "User Already Available!!!", data: null })
        },

/**
 * authenticating user to POC App
 * request body is required with username and password
 */
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
        },

/**
 * get all users from userManagement collection
 */
        getUsersList : async(req,res)=>{
                let finduser = await userModel.find({})
                if(!finduser){
                    res.send({status:"error",message:"unable to get user list"})
                }else{
                    res.json(finduser)
                }
        },

/**
 * get specfic users from userManagement collection\
 * params : username
 */
        getUser : async(req,res)=>{
            let user = req.params.User
            let finduser = await userModel.find({userName:user})
            if (finduser.length === 0){
                res.send({Status: "error", message: "user is not available"})
            }else {
                res.send(finduser)
            }
        }
    }