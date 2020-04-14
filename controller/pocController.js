/**
 * importing required modules 
 */
const pocModel = require('../model/pocModel')

module.exports = {
/**
 * get all data from poc collection no params required 
 */
    getPocAll: async (req, res) => {
        let getPocList = await pocModel.find({})
        if (getPocList.length === 0){
            res.send(getPocList)
        }else {
            res.send(getPocList)
        }
    },
    
/**
 * get data by team name from poc collections  
 * params: TeamName required 
 */
    getPocTeam : async (req, res) => {
        let team = req.params.Team
        let getPocList = await pocModel.find({team:team})
        if (getPocList.length === 0){
            res.send(getPocList)
        }else {
            res.send(getPocList)
        }
    },

/**
 * insert data to POC Collections
 *  params: TeamName required 
 */
    addPoc : async(req,res)=>{
        data = req.body
            const addPoc = await pocModel.create(data)
    
        if(addPoc){
            res.send(addPoc)
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    },

/**
 * edit specfic data of POC Collections
 *  params: TeamName required 
 *  body: pocId requires 
 */
    editPoc : async(req,res)=>{
        let team = req.params.Team,
        data = req.body
        let editPoc = await pocModel.findOneAndUpdate({team:team,"pocId": data.pocId},{$set:data})
        if(editPoc){
            res.send(editPoc)
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    }

}
 
