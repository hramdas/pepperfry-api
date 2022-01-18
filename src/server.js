const express = require('express')
const connect = require('./configs/db')
const app = require('./index')
const port =  process.env.PORT || 3000

app.listen(port, async ()=>{
    await connect()
    console.log("Listening on port 3000")
})

