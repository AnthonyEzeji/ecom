const mongoose = require('mongoose')

const schema = mongoose.Schema({createdAt:Number,
email:String,
cartItems:[],
total:Number
})

const model = mongoose.model('orders', schema)

module.exports = model