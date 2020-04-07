const pocModel = require('../model/pocModel')


module.exports = {
 
    getPoc: async (req, res) => {
     
    try {
        let getPocList = await pocModel.find({}) //pocModel.find({Team:"T1"})
        if (getPocList.length === 0){
            res.json({ Status: "Success", message: "No Data found", data: { pocList: getPocList } })
        }else {
            res.json({ Status: "Success", message: "Data Found" , data: { pocList: getPocList } })
        }

    } catch (error) {
        res.send(error);
    }}
}