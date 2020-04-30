/**
 * importing required modules 
 */
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const saltRounds = 10;

module.exports = {

    /**
     * registering new user to userManagement Collection
     * request body is required : user Data
     */
    register: async (req, res) => {
        let finduser = await userModel.findOne({
            userName: req.body.userName
        });
        if (!finduser) {
            let passwordHash = await bcrypt.hash(req.body.password, saltRounds)
            let userData = {
                userName: req.body.userName,
                password: passwordHash,
                role: req.body.role,
                teams: req.body.teams,
                isUserApproved: false,
                createdDate: new Date(),
                modifiedDate: new Date()
            }
            let createUser = await userModel.create(userData);
            res.send({
                status: "success",
                message: "User Created successfully!!!",
                data: createUser
            })
        } else
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
        if (!finduser) {
            res.send({
                Status: "error",
                message: "user is not available"
            })
        } else if (finduser && !finduser.isUserApproved) {
            res.send({
                status: "error",
                message: "user not approved by admin,Please contact admin"
            })
        } else if (finduser && finduser.userActive === false) {
            res.send({
                status: "error",
                message: "user is inactive"
            })
        } else {
            let pwdCompare = await bcrypt.compare(req.body.password, finduser.password)
            if (pwdCompare) {
                const token = jwt.sign({
                    _id: finduser._id
                }, req.app.get('secretkey'), {
                    expiresIn: "1h"
                });
                res.send({
                    status: "Success",
                    message: "user is authenticated successfully",
                    data: {
                        user: finduser,
                        token: token
                    }
                })
            } else {
                res.send({
                    status: "error",
                    message: "Invalid LoginID/Password",
                    data: null
                })
            }
        }

    },

    /**
     * get all users from userManagement collection
     */
    getUsersList: async (req, res) => {
        let finduser = await userModel.find({})
        if (!finduser) {
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
        if (!finduser) {
            res.send({
                Status: "error",
                message: "user is not available"
            })
        } else {
            res.send(finduser)
        }
    },

    /**
     * edit specfic user data of userManagement Collections
     *  params: userName required 
     *  body: changed userdata 
     */
    editUser: async (req, res) => {
        let user = req.params.User,
            data = {
                ...req.body,
                modifiedDate: new Date()
            }
        /**
         * {new: true}-- to get the updated value from mongodb
         */
        if (data.hasOwnProperty("password")) {
            let bcrypt_pass = await bcrypt.hash(data.password, saltRounds),
                updated_data = {
                    ...data,
                    password: bcrypt_pass
                }
            let editUser = await userModel.findOneAndUpdate({
                userName: user
            }, {
                $set: updated_data
            }, {
                new: true
            })
            if (!editUser) {
                res.send({
                    Status: "Error",
                    message: "Unable to Edit User"
                })
            } else {
                res.send(editUser)
            }

        } else {
            let editUser = await userModel.findOneAndUpdate({
                userName: user
            }, {
                $set: data
            }, {
                new: true
            })
            if (!editUser) {
                res.send({
                    Status: "Error",
                    message: "Unable to Edit User"
                })
            } else {
                res.send(editUser)
            }
        }
    },

    /**
     * reset password for specific user 
     */
    resetPwd: async (req, res) => {
        let user = req.params.User,
            bcrypt_pass = await bcrypt.hash(req.body.password, saltRounds),
            data = {
                password: bcrypt_pass,
                modifiedDate: new Date()
            }
        let editPwd = await userModel.findOneAndUpdate({
            userName: user
        }, {
            $set: data
        }, {
            new: true
        })
        if (!editPwd) {
            res.send({
                Status: "Error",
                message: "Unable to Change the password"
            })
        } else {
            res.send(editPwd)
        }
    }

}