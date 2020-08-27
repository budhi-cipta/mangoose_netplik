const Subscription = require('../Models/Subscription');



module.exports = {
    getAllSubscription : (req, res) => {
        Subscription.find()
        .populate('id_user',"-password")
        .then(result => {
            res.send({
                message:'get all data subription',
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
    addOneSubscription: (req, res) => {
        const {id_user,status} = req.body
        Subscription.create({
            id_user,
            status
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