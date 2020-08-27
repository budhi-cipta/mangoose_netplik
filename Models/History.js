const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historyWatchSchema = new Schema({
    id_movie:{
        type:Schema.Types.ObjectId,
        ref:'movies'
    },
    id_user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    id_subscription:{
        type:Schema.Types.ObjectId,
        ref:'subscription'
    },
},{
    timestamps:true
})

const HistoryWatch = mongoose.model('historyWatch', historyWatchSchema)

module.exports = HistoryWatch