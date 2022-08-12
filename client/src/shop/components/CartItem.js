import { Button } from '@mui/material'
import React from 'react'
import '../css/CartItem.css'
import {useDispatch } from 'react-redux'
import {increase,decrease,removeItem} from '../redux/CartSlice.js'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function CartItem(props) {
    const dispatch = useDispatch()
  return (

   <div className="cart-item">
    <img className='cart-item-image' src={props.item.image} alt={props.item.description} />
    <div className="cart-item-info"><h5>{props.item.title} - ${props.item.price}</h5><p>{props.item.description}</p></div>
    <div className="cart-item-quantity">
        <Button onClick={()=>dispatch(decrease(props.item))}><ArrowBackIosIcon style={{color:'grey'}}></ArrowBackIosIcon></Button>
        <div className="quantity-display">
            {props.item.quantity}
        </div>
        <Button onClick={()=>dispatch(increase(props.item))}><ArrowForwardIosIcon  style={{color:'grey'}}></ArrowForwardIosIcon></Button>
    
        
    </div>
    <Button onClick={()=>dispatch(removeItem(props.item))}><HighlightOffIcon style={{color:'red'}}/></Button>
   </div>
  )
}

export default CartItem