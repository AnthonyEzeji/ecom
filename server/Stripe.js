const Stripe = require('stripe')
const express = require('express')
const router = express.Router()

router.post('/',async (req,res)=>{
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  console.log(req.body)
  try {
    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
     
    
      line_items: req.body.map((item) => {
       
        return {
          price_data: { 
            currency: 'usd',
            product_data: { 
              name: item.title
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled:true,
            minimum: 1,
          },
          quantity: item.quantity
        }
      }),
      success_url: `${req.headers.origin}/`,
      cancel_url: `${req.headers.origin}/canceled`,
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);

    res.status(200).json(session);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
})



module.exports=router