/**
 * importing required modules 
 */
const teamModel = require('../model/teamModel')

module.exports = {
    /**
     * get all team from teams collection no params required 
     */
    getTeams: async (req, res) => {
        let getTeams = await teamModel.find({})
        if (!getTeams) {
            res.send({
                Status: "error",
                message: "unable to get teams from the db"
            })
        } else {
            res.send(getTeams)
        }
    }
}