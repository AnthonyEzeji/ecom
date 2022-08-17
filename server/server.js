const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const stripe = require('stripe')
const StripeRoute = require('./Stripe')
const webhookRoutes = require('./webhookRoutes')
const userRoutes = require('./user/userRoutes')
const orderRoutes = require('./orders/orderRoutes')
require('dotenv').config()

const productRoutes = require('./products/productRoutes')

mongoose.connect(process.env.DB,{useNewUrlParser: true,useUnifiedTopology: true }, ()=>console.log('successfully connected to db...'))

var app = express()


app.use(cors(), express.json())
app.use('/products', productRoutes)
app.use('/api/stripe', StripeRoute)
app.use('/webhook', webhookRoutes)
app.use('/user', userRoutes)
app.use('/orders', orderRoutes)

app.listen(process.env.PORT||5001, ()=>{
    console.log(`Server successfully running on port ${process.env.PORT||5001}...`)
})
