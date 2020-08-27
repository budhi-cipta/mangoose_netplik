const express = require('express')
const route = express.Router();

const {
    getMovies ,
    addOneMovies
} = require('../controllers/Movies')

route.get('/movies', getMovies)
route.post('/movies', addOneMovies)

module.exports = route