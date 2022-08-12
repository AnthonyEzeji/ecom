import React from 'react'
import '../css/AdminProduct.css'
function Product(props) {
  return (
   <div   className="product">

    <img id = 'product-image' style={{width:75,height:75}} src={props.product.image}></img>
  
    <h3 id='product-title'>{props.product.title}</h3>
    <p id='product-description'>{props.product.description}</p>
   <h5 id='product-stock'>{props.product.stock}</h5>
    <h5 id='product-price' >${props.product.price}</h5>
   
    
   </div>
  )
}

export default Product