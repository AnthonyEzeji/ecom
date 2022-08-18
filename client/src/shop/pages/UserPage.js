import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../css/UserPage.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Product from '../components/Product'
function UserPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])
    const [productsMap, setProductsMap] = useState(new Map())
    const [products, setProducts] = useState([])
    const [previewProducts, setPreviewProducts] = useState([])
const [index, setIndex] = useState(0)
const [previewSize, setPreviewSize] = useState(5)
useEffect(() => {
     setUser(JSON.parse(window.sessionStorage.getItem('session')))
async function getUserOrders(){
    await axios.get(`http://44.208.28.123:5000/orders/${JSON.parse(window.sessionStorage.getItem('session'))._id}`).then(res=>{setOrders(res.data.reverse())})
}
getUserOrders()
}, [])
useEffect(() => {
    var tempArr = []
orders.forEach(order=>{
    order?.cartItems.forEach(item=>{
        tempArr.push(item._id)
    })
})
var set = new Set([...tempArr])
tempArr = Array.from(set)

async function getProducts(){
    let products = new Map();
    for(var i = 0; i < tempArr.length; i++){
      
    await axios.get(`http://44.208.28.123:5000/products/${tempArr[i]}`).then(res=>{
        console.log(res.data)
        products[res.data._id]= res.data
    })

    }
    setProductsMap(products)
}
getProducts()
}, [orders]) 




function changeIndex(num){
console.log(index)
if(index==0&&num == -1){
   setIndex(0)
} else if(index == products.length-previewSize&&num==1){
  return
}
else{
  setIndex(index+num)
}

}

useEffect(() => {
if(window.innerWidth<=1250){
setPreviewSize(3)
}
}, [])


//
useEffect(() => {
  async function getProducts(){
    await axios.get('http://44.208.28.123:5000/products').then(res=>{
        setProducts(res.data)
    })
  }getProducts()
}, [])
//
useEffect(() => {
  setPreviewProducts(products?.slice(index, index+previewSize))

}, [products,previewSize,index])

var x = window.matchMedia("(max-width: 1250px)")
x.addListener(()=>{setPreviewSize(3)}) // Attach listener function on state changes
var x = window.matchMedia("(max-width: 1500px)")
x.addListener(()=>{setPreviewSize(5)}) // Attach listener function on state changes
var x = window.matchMedia("(max-width: 800px)")
x.addListener(()=>{setPreviewSize(2)}) // Attach listener function on state changes
function handleLogoutClick(){
    window.sessionStorage.setItem('session',null)
    navigate('/')
}
  return (
 <div className="user-page">
<NavBar/>
<div className="user-page-top">
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
                    <img src={productsMap[item._id]?.image}/>
                    <idv className="order-item-info">
                    <p id='order-item-field'>Product - {productsMap[item._id]?.title}</p>
                    <p id='order-item-field'>Product ID -  {item._id}</p>
                    <p id='order-item-field'>Price - ${productsMap[item._id]?.price *item.q }</p>
                    <p id='order-item-field'>Quantity -  {item.q}</p>
                    </idv>
                    
                    </div>)})}

            </div>)
        })}

    </ul>
</div>
</div>
<div id= "shop-btn"><p>IN STOCK AND ON SALE! SHOP DISCOUNTED PRODUCTS AND GET THEM DELIVERED ASAP </p></div>
<div  className="preview">
    <Button style={{backgroundColor:'black', borderTopLeftRadius:"50px",borderBottomLeftRadius:"50px"}} onClick={()=>{changeIndex(-1)}}><ArrowCircleLeftIcon style = {{color:'white'}}/></Button>
    {previewProducts?.map((product,index)=>{
   
   return(<Product style={{margin:10}} key={index} product={product}/>)
   })}
     <Button style={{backgroundColor:'black', borderTopRightRadius:"50px",borderBottomRightRadius:"50px"}} onClick={()=>{changeIndex(1)}}><ArrowCircleRightIcon style = {{color:'white'}}/></Button>
    </div>
 </div>
  )
}

export default UserPage