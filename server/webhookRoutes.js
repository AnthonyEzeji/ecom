const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = "whsec_dcfccbaff4c7e2558c68fec59f922553498c3cbe77ce56a801baee8f0942d43a";
const orderModel = require('./orders/orderModel')
const productModel = require('./products/productModel')
router.post('/', (req, response) => {
//express.raw({type: 'application/json'})

  
  
  let event;

  try {
    event = req.body;
    console.log(event)
   
  } catch (err) {
    console.log(err + "<--------this is an error")
    response.status(400).send(`Webhook Error: ${err.message}`);
  
    return;
  }
async function createOrder(order) {
  var doc = {}
    const newOrder = await orderModel.create(order).then(docResponse=>{
      doc=docResponse
    })

    for(var i = 0; i < doc.cartItems.length;i++){
      await productModel.findByIdAndUpdate(doc.cartItems[i]._id, {$inc: {stock: -1 * doc.cartItems[i].q }  })
          
            }

}
  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
        
      const createdAt = event.created
  
      const total = event.data.object.amount_total/100
      
      const order = {createdAt,email:event.data.object.metadata.email, cartItems: JSON.parse(event.data.object.metadata.cartItems), total:total}
      createOrder(order)
      
      
      // Then define and call a function to handle the event payment_intent.succeeded
 
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});
module.exports = router