/**
 * importing required modules 
 */
const userModel = require('../model/userModel')

module.exports = {

    /**
     * registering new user to userManagement Collection
     * request body is required : user Data
     */
    register: async (req, res) => {
        let finduser = await userModel.findOne({
            userName: req.body.userName
        });
        if (finduser.length === 0) {
            let userData = new userModel(req.body)
            let createUser = await userModel.create(userData);
            res.send({
                status: "success",
                message: "User Created successfully!!!",
                data: createUser
            })
        }
        res.send({
            status: "error",
            message: "User Already Available!!!",
            data: null
        })
    },

    /**
     * authenticating user to POC App
     * request body is required with username and password
     */
    authenticate: async (req, res) => {
        let finduser = await userModel.findOne({
            userName: req.body.userName
        })
        if (finduser.length === 0) {
            res.send({
                Status: "error",
                message: "user is not available"
            })
        } else {
            if (req.body.password == finduser.password) {
                return res.send({
                    status: "Success",
                    message: "user is authenticated successfully",
                    data: {
                        user: finduser
                    }
                })
            }
            res.send({
                status: "error",
                message: "Invalid LoginID/Password",
                data: null
            })
        }
    },

    /**
     * get all users from userManagement collection
     */
    getUsersList: async (req, res) => {
        let finduser = await userModel.find({})
        if (finduser.length === 0) {
            res.send({
                status: "error",
                message: "unable to get user list"
            })
        } else {
            res.send(finduser)
        }
    },

    /**
     * get specfic users from userManagement collection\
     * params : username
     */
    getUser: async (req, res) => {
        let user = req.params.User
        let finduser = await userModel.find({
            userName: user
        })
        if (finduser.length === 0) {
            res.send({
                Status: "error",
                message: "user is not available"
            })
        } else {
            res.send(finduser)
        }
    },
    /**
     * edit specfic user of userManagement Collections
     *  params: userName required 
     *  body: changed userdata 
     */
    editUser: async (req, res) => {
        let user = req.params.User,
            data = req.body
        // {new: true}
        let editUser = await userModel.findOneAndUpdate({
            userName: user
        }, {
            $set: data
        }, {
            new: true
        })
        if (editUser.length === 0) {
            res.send({
                Status: "Error",
                message: "Unable to Edit User"
            })
        } else {
            res.send(editUser)
        }
    }

}