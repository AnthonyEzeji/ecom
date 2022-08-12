import { Button } from '@mui/material'
import React from 'react'
import '../css/NavBar.css'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
function NavBar() {
const {amount} = useSelector((state)=>state.cart)
  return (
    <div className="navbar">
       <Button style={{borderRadius:0,color:"grey",height:"100%",borderLeft:'1px solid grey'}}> LOGIN</Button>
       <div  style={{display:'flex', alignItems:'center', justofyContent:'center',width:50,borderRadius:0,color:"grey",height:"100%",borderLeft:'1px solid grey'}}> <NavLink to='/cart'><ShoppingCartSharpIcon style={{color:"grey", fontSize:30}}></ShoppingCartSharpIcon></NavLink><h5 id='cart-amount'>{amount}</h5></div>
    </div>
  )
}

export default NavBar