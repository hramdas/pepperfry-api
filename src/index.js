const express = require('express')
const app = express();
app.use(express.json())

const userController = require('./controllers/users')
app.use('/user', userController)

const productController = require('./controllers/products')
app.use('/product', productController)

const cartController = require('./controllers/carts')
app.use('/cart', cartController)

module.exports = app
module.exports = app
