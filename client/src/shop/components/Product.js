import React, { useEffect, useState } from 'react'
import "../css/Product.css"
import StarSharpIcon from '@mui/icons-material/StarSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Button } from '@mui/material';
import {addItem} from '../redux/CartSlice'
import {useDispatch} from 'react-redux'
function Product(props) {
    const [rating, setRating] = useState([{index:null}])
    useEffect(() => {
      function getRating(){
        var tempArr = []
        for(var i = 0; i < props?.product.rating; i++){
           
            tempArr.push(i)
           
            
        }
        setRating(tempArr)
      }
      getRating()
    }, [])
    
var dispatch = useDispatch()

  return (
    <div className="product">
        <img src={props.product.image}></img>
        <div className="product-info">
<h3>{props.product.title}</h3>
<div className="product-rating">
{rating.map((star)=>{
  return (<StarSharpIcon style={{color:'gold'}} key={star.index}/>)
    
})}
</div>


<p id='product-price'>${props.product.price}</p>

        </div>
        <Button onClick={()=>dispatch(addItem(props.product))} style={{ width:"100%", marginTop:50}} id ='add-btn'><AddShoppingCartSharpIcon id='add-icon' /></Button>
    </div>
  )
}

export default Product