/**
 * importing required modules 
 */
const pocModel = require('../model/pocModel')
const pocHistoryModel = require('../model/pocHistoryModel')
const sequenceGenerator = require('./sequenceGenerator')

module.exports = {

    /**
     * get all data from poc collection no params required 
     */
    getPocAll: async (req, res) => {
        let getPocList = await pocModel.find({})
        if (!getPocList) {
            res.send({
                Status: "error",
                message: "POC List is not available"
            })
        } else {
            res.send(getPocList)
        }
    },

    /**
     * get data by team name from poc collections  
     * params: TeamName required 
     */
    getPocTeam: async (req, res) => {
        let team = req.params.Team
        let getPocList = await pocModel.find({
            team: team
        })
        if (!getPocList) {
            res.send({
                Status: "error",
                message: "POC List is not available"
            })
        } else {
            res.send(getPocList)
        }
    },

    /**
     * insert data to POC Collections
     *  params: TeamName required 
     */
    addPoc: async (req, res) => {
        let data = req.body,
            pocId = await sequenceGenerator(data.team)
        data = {
            ...data,
            pocId: pocId,
            createdDate: new Date(),
            modifiedDate: new Date()
        }
        const addPoc = await pocModel.create(data)

        if (!addPoc) {
            res.send({
                Status: "Error",
                message: "POC Creation error"
            })
        } else {
            res.send(addPoc)
        }
    },

    /**
     * edit specfic data of POC Collections and 
     * add a record to POCHistory Collection
     *  params: TeamName required 
     *  body: pocId requires 
     */
    editPoc: async (req, res) => {
        let team = req.params.Team,
            data = {
                ...req.body,
                modifiedDate: new Date()
            },
            insertData = {
                ...req.body,
                createdDate: new Date(),
                modifiedDate: new Date()
            }
        /**
         * {new: true}-- to get the updated value from mongodb
         */
        let editPoc = await pocModel.findOneAndUpdate({
            team: team,
            "pocId": data.pocId
        }, {
            $set: data
        }, {
            new: true
        })
        let changeHistory = await pocHistoryModel.create(insertData)
        if (!editPoc) {
            res.send({
                Status: "Error",
                message: "POC Edit error"
            })
        } else {
            res.send(editPoc)
        }
    }

}