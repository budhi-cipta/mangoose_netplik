
const Movie = require('../Models/movies');

module.exports = {
    getMovies : (req, res) => {
        Movie.find()
        .then(result => {
            res.send({
                message:'get all data movies',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'failed'
            })
        }) 
    },
    addOneMovies: (req, res) => {
        const{title,year,genre,description,url_trailer} = req.body
        Movie.create({
            title,
            year,
            genre,
            description,
            url_trailer
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