const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = "whsec_dcfccbaff4c7e2558c68fec59f922553498c3cbe77ce56a801baee8f0942d43a";
const orderModel = require('./orders/orderModel')
router.post('/', express.raw({type: 'application/json'}), (request, response) => {
 
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  
    return;
  }
async function createOrder(order) {
    const newOrder = await orderModel.create(order)
 
console.log(newOrder)
}
  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
        
      const createdAt = event.created
      const order = {createdAt,email:event.data.object.metadata.email, cartItems: JSON.parse(event.data.object.metadata.cartItems)}
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