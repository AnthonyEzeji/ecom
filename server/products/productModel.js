const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:String,
    category:String,
    image:String,
    description:String,
    stock:Number,
    price:Number,
    rating:Number
})

const model = mongoose.model('products', schema)

module.exports = model