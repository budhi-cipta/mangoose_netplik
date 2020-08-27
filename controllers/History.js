const History = require('../Models/History');


module.exports = {
    getAllHistory : (req, res) => {
        History.find()
        .populate({path: 'id_user', select: 'name email'})
        .populate({path: 'id_movie', select: 'title url_trailer'})
        .populate({path:'id_subscription', select: '_id'})
        .then(result => {
            res.send({
                message:'get all data history',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message:'failed'
            })
        })
    },
    addOneHistory: (req, res) => {
        const {id_user,id_movie,id_subscription} = reg.body
        Subscription.create({
            id_user,
            id_movie,
            id_subscription
        },(error, result) => {
            if(error){
                res.send({
                    message:"error"
                })
            }else{
            res.send({
                message:result
            })

        }
        })
    }
 }