const expresss =  require('express')
const router = expresss.Router()
const User = require('../models/user')

router.post("/signup", async (req, res)=>{
    console.log(req.body)
    try{
        let user = await User.findOne({email : req.body.email}).lean().exec()

        if(user) return user.statue(400).send({status : failed, message : "User already registered"})

        user = await User.create(req.body);

        res.status(201).send(user)
    }
    catch(err){
        res.status(500).json({message:e.message})
    }}
)

router.post('/login', async (req, res)=>{
    try{
        let user = User.findOne({email : req.body.email}).lean().exec()
        if(!user) return res.status(400).send({status : failed, message : "Please check email and password"})
        //check password match
        const match = await user.checkPassword(req.body.password)
        if(!match) return res.status(400).send({status : failed, message : "Please check email and password"})
        res.status(201).send(user)

    }catch(err){
        res.status(500).json({message : e.message})
    }
})

router.get('/', async(req, res)=>{
    let user = User.find().lean().exec();
    res.status(200).send(user)
})

module.exports = router