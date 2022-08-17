import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/AdminProduct'
import '../css/Products.css'
function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      async function getProducts(){
        await axios.get('http://44.208.28.123:5000/products').then(res=>{
            setProducts(res.data)
        })
      }
      getProducts()
    }, [])
    console.log(products)
  return (
    
    <div className='products'>
      <div className="container">
      <div className="header">
      <h5 id = 'header-product'>Product</h5>
      <h5 id='header-desc'>Description</h5>
      <h5 id = 'header-stock'>Stock</h5>
      <h5 id = 'header-price'>Price</h5>
    </div>
    <ul className='product-list'>
    {products.map((product)=>{
        return (<Product key={product._id} product={product}/>)
    })}
    </ul>
      </div>
      
    
    </div>
  )
}

export default Products