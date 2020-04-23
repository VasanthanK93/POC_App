/**
 * importing required modules 
 */
const roleModel = require('../model/roleModel')

module.exports = {
    /**
     * get all roles from roles collection no params required 
     */
    getRoles: async (req, res) => {
        let getRoles = await roleModel.find({})
        if (!getRoles) {
            res.send({
                Status: "error",
                message: "unable to get roles from the db"
            })
        } else {
            res.send(getRoles)
        }
    }
}