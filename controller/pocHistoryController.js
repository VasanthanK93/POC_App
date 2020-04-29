/**
 * importing required modules 
 */
const roleModel = require('../model/pocHistoryModel')

module.exports = {
    /**
     * get all changes history for pocID from pocHistory collection POCId is required as params 
     */
    getPOCHistory: async (req, res) => {
        let pocID = req.params.POCId
        let getChangeHistory = await roleModel.find({pocId:pocID})
        if (!getChangeHistory) {
            res.send({
                Status: "error",
                message: "Change History is not Available for the POCID"
            })
        } else {
            res.send(getChangeHistory)
        }
    }
}