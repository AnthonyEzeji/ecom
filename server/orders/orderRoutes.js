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
                console.log(docs)
                res.send(docs)
        })
        })
   
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error})
    }

})
module.exports= router