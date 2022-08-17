const Stripe = require('stripe')
const express = require('express')
const router = express.Router()

router.post('/',async (req,res)=>{
  const metadata = {email:req.body.session.email,cartItems:JSON.stringify(req.body.cartItems.map(item=>{return {title:item.title, quantity:item.quantity, price:item.price,_id:item._id}}))}

  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const params = {
      submit_type: 'pay',
      mode: 'payment',
     customer_email:req.body.session.email,
     metadata:metadata,
      line_items: req.body.cartItems.map((item) => {
       
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
    console.log(err)
    res.status(err.statusCode || 500).json(err.message);
  }
})



module.exports=router