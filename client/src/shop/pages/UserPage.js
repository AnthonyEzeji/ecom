import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../css/UserPage.css'
function UserPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])
useEffect(() => {
     setUser(JSON.parse(window.sessionStorage.getItem('session')))
async function getUserOrders(){
    await axios.get(`http://localhost:5000/orders/${JSON.parse(window.sessionStorage.getItem('session'))._id}`).then(res=>{setOrders(res.data.reverse())})
}
getUserOrders()
}, [])
function handleLogoutClick(){
    window.sessionStorage.setItem('session',null)
    navigate('/')
}
  return (
 <div className="user-page">
<NavBar/>
    <div className="account">
        <div className="account-top">
            <h1>
                Account
            </h1>
        </div>
        <div className="account-body">
            <div className="account-body-field">
                <h5>Email</h5> 
                <p>
                {user.email}
                </p>

                
            </div>
            <div className="account-body-field">
                <h5>Name: </h5>
                <p>{user.firstName + " " +user.lastName}</p>
            </div>
            <Button onClick={handleLogoutClick} id = "logout-btn">Logout</Button>
            
        </div>
    </div>
<div className="orders">
    <div className="order-top">
        <h1>Orders</h1>
    </div>
    <ul className="order-list" style={{padding:0}}>
        {orders.map(order=>{
            return(
            <div  id = "order">
                <h5>Order ID: {order._id}</h5>
                {order.cartItems.map(item=>{return(
                <div id="order-item">
                    <p id='order-item-field'>Product - {item.title}</p>
                    <p id='order-item-field'>Product ID -  {item._id}</p>
                    <p id='order-item-field'>Price - ${item.price}</p>
                    <p id='order-item-field'>Quantity -  {item.quantity}</p>
                    </div>)})}

            </div>)
        })}

    </ul>
</div>
 </div>
  )
}

export default UserPage