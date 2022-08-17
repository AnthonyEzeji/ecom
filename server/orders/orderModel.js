const mongoose = require('mongoose')

const schema = mongoose.Schema({createdAt:Number,
email:String,
cartItems:[]
})

const model = mongoose.model('orders', schema)

module.exports = model