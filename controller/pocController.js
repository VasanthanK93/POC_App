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
        let getPocList = await pocModel.find({Team:team}) //pocModel.find({Team:"T1"})
        if (getPocList.length === 0){
            res.send(getPocList)
        }else {
            res.send(getPocList)
        }
    },

    addPoc : async(req,res)=>{
        let team = req.params.Team,
        data = req.body
        let addPoc = await pocModel.findOneAndUpdate({Team:team},{$push:{POCList:data}})
        if(addPoc){
            res.json({ Status: "Success", message: "New POC Created", data: { pocList: addPoc } })
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    },

    editPoc : async(req,res)=>{
        let team = req.params.Team,
        data = req.body
        console.log("inside")
        let editPoc = await pocModel.findOneAndUpdate({Team:team,"POCList.id": data.id},{"POCList.$":data})
        if(editPoc){
            res.json({ Status: "Success", message: "New POC Created", data: { pocList: editPoc } })
        }else{
            res.json({ Status: "Error", message: "POC Creation error"})
        }
    }

}
 
