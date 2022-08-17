const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../user/userModel')
router.post('/register',async(req,res)=>{
   
    try {
        const newUser = new userModel(req.body)
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.save().then((doc) => res.status(201).send(doc));
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error})
    }

})

router.post('/login',async(req,res)=>{
   
    try {
       const user = await userModel.findOne({email:req.body.email})
       if(user){
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
           
          res.status(200).json({ email:user.email, firstName:user.firstName, lastName: user.lastName, _id:user._id });
        } else {
          res.status(400).json({ error: "Invalid Password" });
        }
       } else {
        res.status(401).json({ error: "User does not exist" });
      }
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error})
    }

})
router.get('/:_id', async (req,res)=>{
await userModel.findById(req.params._id).then(doc=>{
    res.status(200).send(doc)
})
})

module.exports = router