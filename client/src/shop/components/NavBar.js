import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../css/NavBar.css'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {useSelector} from 'react-redux'
import { NavLink, useNavigate} from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false)
  
const {amount} = useSelector((state)=>state.cart)
let navigate = useNavigate()
useEffect(() => {
  if(window.sessionStorage.hasOwnProperty('session')&&JSON.parse(window.sessionStorage.getItem('session'))!==null){
    setLoggedIn(true)
  }

 
}, [])

  return (
    <div className="navbar">
      <HomeIcon id= 'home-icon' onClick={()=>navigate('/')} style ={{color:'grey', position:'absolute', left:'20px'}}/>
       {!loggedIn?<Button id= 'login-btn' onClick={()=>navigate('/login')} style={{fontWeight:'400',borderRadius:0,color:"grey",height:"100%",borderLeft:'1px solid grey'}}> Login</Button>:<Button id= 'my-account' onClick={()=>navigate(`/user/${JSON.parse(window.sessionStorage.getItem('session'))._id}`)} style={{fontWeight:'400',borderRadius:0,height:"100%",borderLeft:'1px solid grey'}}> {JSON.parse(window.sessionStorage.getItem('session')).firstName}</Button>}
       <div  style={{display:'flex', alignItems:'center', justofyContent:'center',width:75,borderRadius:0,color:"grey",height:"100%",width:50,borderLeft:'1px solid grey'}}> <NavLink to='/cart'><ShoppingCartSharpIcon style={{position:'absolute',right:'15px',top:'15px' ,color:"grey", fontSize:25}}></ShoppingCartSharpIcon><h5 id='cart-amount'>{amount}</h5></NavLink></div>
    </div>
  )
}

export default NavBar