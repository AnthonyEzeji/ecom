const express = require('express')
const productModel = require('./productModel')
const router = express.Router()

router.get('/',async (req,res)=>{

    try {
        await productModel.find({}).then((docs,err)=>{
            if(err){
                res.send({mess:err})
            }else{
                res.send(docs)
            }
        })
    } catch (error) {
        res.send({message:error})
    console.log(error)
    }
   
})
router.get('/:_id',async (req,res)=>{
    console.log(req.params)
try {
    await productModel.findById(req.params._id).then((doc,err)=>{
        if(err){
            res.send({mess:err})
        }else{
            res.send(doc)
        }
    })
    
} catch (error) {
    res.send({message:error})
    console.log(error)
}
    
})

router.post('/', async (req,res)=>{
    console.log(req.body)
try {
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
    
} catch (error) {
    
    res.send({message:error})
    console.log(error)
}
   
   
})
module.exports = router