const mongoose = require('mongoose')


const url= "mongodb+srv://root:rootroot@cluster0.pf9vd.mongodb.net/netplik";
// const database = "impactbyte";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;