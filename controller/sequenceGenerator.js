/**
 * importing required modules 
 */
const sequenceModel = require('../model/sequenceModel')

/**
 * function for autgeneration of POC ID
 */

const sequenceGenerator = async (team) => {
    const seqId = await sequenceModel.find({
        team: team
    })
    let id = seqId[0].nextId
    const pocId = seqId[0].team + id.toString().padStart(3, '0')
    await sequenceModel.findOneAndUpdate({
        team: team
    }, {
        $inc: {
            nextId: 1
        }
    })
    return pocId
}

module.exports = sequenceGenerator