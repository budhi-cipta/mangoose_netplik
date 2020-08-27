const mongoose = require('mongoose')


const Schema = mongoose.Schema


const movieSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url_trailer:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

const Movie = mongoose.model('movies',movieSchema)
module.exports = Movie