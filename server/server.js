const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StripeRoute = require('./Stripe')
require('dotenv').config()

const productRoutes = require('./products/productRoutes')

mongoose.connect(process.env.DB,{useNewUrlParser: true,useUnifiedTopology: true }, ()=>console.log('successfully connected to db...'))

var app = express()

app.use(cors(), express.json())
app.use('/products', productRoutes)
app.use('/api/stripe', StripeRoute)

app.listen(process.env.PORT||5000, ()=>{
    console.log(`Server successfully running on port ${process.env.PORT||5000}...`)
})
