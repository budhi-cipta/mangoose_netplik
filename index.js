const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const userRouter = require('./routes/users')
const addressRouter = require('./routes/Address')
const moviesRouter = require('./routes/Movies')
const historyRouter = require('./routes/History')
const subscriptionRouter = require('./routes/Subscription')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', addressRouter)
app.use('/', moviesRouter)
app.use('/',historyRouter)
app.use('/', subscriptionRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(8000, ()=> {
    console.log('connected')
})