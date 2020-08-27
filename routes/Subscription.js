const express = require('express')
const route = express.Router();

const {
    getAllSubscription ,
    addOneSubscription
} = require('../controllers/Subscription')

route.get('/subscription', getAllSubscription)
route.post('/subscription', addOneSubscription)

module.exports = route