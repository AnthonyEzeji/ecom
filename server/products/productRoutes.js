const express = require('express')
const productModel = require('./productModel')
var router = express.Router()

router.get('/',async (req,res)=>{

    await productModel.find({}).then((docs,err)=>{
        if(err){
            res.send({mess:err})
        }else{
            res.send(docs)
        }
    })
})
router.get('/:_id',async (req,res)=>{

    await productModel.findById(req.params._id).then((doc,err)=>{
        if(err){
            res.send({mess:err})
        }else{
            res.send(doc)
        }
    })
})

router.post('/', async (req,res)=>{

    const product = new productModel({ title:req.body.title,
        image:req.body.image,
        description:req.body.description,
        stock:req.body.stock,
        price:req.body.price,
        rating:0, 
        category:req.body.category})
        await product.save().then(doc=>{
            res.send(doc)
            
        })
   
})
module.exports = router