const express = require('express')
const router = express.Router()
const Cart = require('../models/carts');
const products = require('../models/products');

//Add item to users cart
router.post('/', async(req, res)=>{
    //find cart using userid
    let cart = await Cart.findOne({user : req.body.user})
    const productId = req.body.products.product
    // add to cart
    if(cart){
        let itemIndex = cart.products.findIndex(p=>p.product == productId)
        
        if(itemIndex >=0){
            cart.products[itemIndex].quantity+=1 //increase quantity
        } else{
            cart.products.push(req.body.products)
        }
        
        cart = await cart.save()
        return res.status(200).send(cart)
    } else {
        cart = await Cart.create(req.body);  //create new cart for user
        res.status(201).send(cart)
    }
})

//Get User Cart using user id
router.get('/:userId', async (req, res)=>{
    const cart = await Cart.findOne({user : req.params.userId}).populate('products.product').lean().exec();
    res.status(200).send(cart)
})

router.get('/', async (req, res)=>{
    const cart = await Cart.find().populate('user').lean().exec();
    res.status(200).send(cart)
})

module.exports = router