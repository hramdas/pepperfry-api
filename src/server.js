const express = require('express')
const connect = require('./configs/db')
const app = require('./index')

app.listen(2200, async ()=>{
    await connect()
    console.log("Listening on port 2000")
})

