const express = require('express')
const router = express.Router()

const orderModel = require('../orders/orderModel')
const userModel = require('../user/userModel')
router.get('/:_id',async(req,res)=>{
   
    try {
        var email;
        await userModel.findById(req.params._id).then(doc=>{
            email = doc.email
            orderModel.find({email:email}).then(docs=>{
            
                res.send(docs)
        })
        })
   
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error})
    }

})
router.get('/',async(req,res)=>{
   
    try {
       
   await orderModel.find({}).then(docs=>{
    res.status(200).send(docs)
   })
   
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error})
    }

})
module.exports= router