import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import getStripe from '../../lib/getStripe'
import CartItem from '../components/CartItem'
import NavBar from '../components/NavBar'
import axios from 'axios'
import '../css/Cart.css'

function Cart() {

const cartState = useSelector((state)=>state.cart)
const [subTotal, setSubTotal] = useState(cartState?.total);
const [total, setTotal] = useState(cartState?.total*5.09/100+cartState?.total);

useEffect(() => {
  setSubTotal(cartState.total)
 setTotal(cartState.total)
}, [cartState])

    const {cartItems} = useSelector(state=>state.cart)

    const handleCheckout = async () => {
      if(!window.sessionStorage.hasOwnProperty('session')){
        return alert('Please login to checkout cart! Thanks!')
      }else if (JSON.parse(window.sessionStorage.getItem('session')) === null){
        return alert('Please login to checkout cart! Thanks!')
      }
      const stripe = await getStripe();
  const response = await axios.post('http://localhost:5000/api/stripe',{cartItems, session:JSON.parse(window.sessionStorage.getItem('session'))})
 console.log(response)
  if(response.status === 500) return;
    
    const data = response.data;

   

    stripe.redirectToCheckout({ sessionId: data.id });
  }
  return (
    <div className = 'cart'>
        <NavBar/>
        <ul className='cart-list'>
        {cartItems.map(item=>{
    return (<CartItem item={item}/>)
    })}
        </ul>
        {cartState.cartItems.length>0?<div className="cart-total">
          <div className="subtotal"> <h3>Subtotal:</h3><p>{subTotal}</p>  </div>
         
          <div className="total"> <h1>Total:</h1><h1 className= 'total-number'>{total}</h1>  </div>
          <Button onClick={()=>{handleCheckout()}} id="checkout-btn">Checkout</Button>
        </div>:<h5>It looks like your cart is empty!</h5>}
        
        </div>
  )
}

export default Cart