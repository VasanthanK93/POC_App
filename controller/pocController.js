const pocModel = require('../model/pocModel')

module.exports = {

    getPocAll: async (req, res) => {
        let getPocList = await pocModel.find({}) //pocModel.find({Team:"T1"})
        if (getPocList.length === 0){
            res.send(getPocList)
        }else {
            res.send(getPocList)
        }
    },
    
    getPocTeam : async (req, res) => {
        let team = req.params.Team
        let getPocList = await pocModel.find({team:team}) //pocModel.find({Team:"T1"})
        if (getPocList.length === 0){
            res.send(getPocList)
        }else {
            res.send(getPocList)
        }
    },

    addPoc : async(req,res)=>{
        let team = req.params.Team,
        data = req.body
        let addPoc = await pocModel.findOneAndUpdate({team:team},{$push:{pocList:data}})
        if(addPoc){
            res.send(addPoc)
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    },

    editPoc : async(req,res)=>{
        let team = req.params.Team,
        data = req.body
        let editPoc = await pocModel.findOneAndUpdate({team:team,"pocList.id": data.id},{"pocList.$":data})
        if(editPoc){
            res.send(editPoc)
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    }

}
 
