const mongoose = require('mongoose')

const schema = mongoose.Schema({
email:{type:String, required:true},
password :{type:String, required:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true}
})

const model = mongoose.model('user', schema)

module.exports = model