const express = require('express')
const route = express.Router();

const {
    getAllHistory ,
    addOneHistory
} = require('../controllers/History')

route.get('/history', getAllHistory)
route.post('/history', addOneHistory)

module.exports = route