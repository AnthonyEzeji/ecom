import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/Dashboard.css'
function Dashboard() {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [revenue, setRevenue] = useState(0)
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    async function getInfo(){
      const base_url = "http://3.87.187.44:5001"
      await axios.get(base_url+'/products').then(res=>{
        setProducts(res.data)
      })
      await axios.get(base_url+'/orders').then(res=>{
        setOrders(res.data)
      })
    }
    getInfo()
  }, []);
  useEffect(() => {
    var revenue = 0
    var customers = []
   orders.forEach(order=>{
    revenue = revenue + order.total
    customers.push(order.email)
   })
   var set = new Set([...customers])
   customers = Array.from(set)
   setCustomers(customers)
   setRevenue(revenue)
  }, [orders])
  
  console.log(products, orders , revenue,customers)
  return (
    <div className = 'dashboard'>
      <div className="dashboard-top">
      <div className="revenue">
          <div className="revenue-header">
            <h3>Revenue</h3>
          </div>
          <div className="revenue-body">
          {revenue}
          </div>

        </div>
        <div className="customers">
        <div className="customer-list-header">
         <h3>Customers</h3>
            
           
          </div>
        <ul className="customer-list">
       
          {customers.map(customer=>{
            return(<div className = "customer-list-entry">
             
              <p>{customer}</p>
              

            </div>)
          })}
        </ul>
        </div>
        <div className="admin-orders">
        <div className="admin-order-list-header">
              <h3>Orders</h3>
            </div>
          <div className="admin-order-list">
            
            <div className="admin-order-list-info">
            {orders.map(order=>{
            return(
            <div className = 'order-list-entry'>
              <p>{order._id}</p>

            </div>)
          })}
            </div>
          </div>
          
        </div>
      </div>
       
        <div className="inventory">
          <div className="inventory-list-header">
          <h3 >Inventory</h3>
          <div className = 'inventory-list-entry'>
              <h5>ID</h5>
              <h5>Product</h5>
              <h5>Stock</h5>
              <h5>Price</h5>

            </div>
          </div>
          <ul className="inventory-list">
          
            {products.map(product=>{return (
            <div className = 'inventory-list-entry'>
              <p>{product._id}</p>
              <p>{product.title}</p>
              <p>{product.stock}</p>
              <p>{product.price}</p>
            </div>)})}
          </ul>

        </div>
    </div>
  )
}

export default Dashboard