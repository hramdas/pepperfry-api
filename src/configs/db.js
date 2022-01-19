const mongoose = require('mongoose')
require('dotenv').config()
module.exports = ()=>{
    // return mongoose.connect('mongodb://127.0.0.1:27017/pepperfry')
    return mongoose.connect('mongodb+srv://hramdas:Ramdas1998@cluster0.or8t9.mongodb.net/pepperfry')
}