var mongoose = require('mongoose');



var Schema = mongoose.Schema;


const subscriptionSchema = new Schema ({
    id_user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    status:{
        type:Boolean,
        required:true
    },
},{
    timestamps:true
})

const Subscription = mongoose.model('subscription', subscriptionSchema)
module.exports = Subscription