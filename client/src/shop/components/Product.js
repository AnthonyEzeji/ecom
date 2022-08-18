import React, { useEffect, useState } from 'react'
import "../css/Product.css"
import StarSharpIcon from '@mui/icons-material/StarSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Button } from '@mui/material';
import {addItem} from '../redux/CartSlice'
import {useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product(props) {
  const notify = () => toast(`${props.product.title} added to cart!`);
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
      <ToastContainer 
      
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      />
        <img src={props.product.image}></img>
        <div className="product-info">
<h3>{props.product.title}</h3>
<div className="product-rating">
{rating.map((star)=>{
  return (<StarSharpIcon style={{color:'gold'}} key={star.index}/>)
    
})}
</div>


<p id='product-price'>${props.product.price.toFixed(2)}</p>

        </div>
        <Button onClick={()=>dispatch(addItem(props.product),notify())} style={{ width:"100%", marginTop:50}} id ='add-btn'><AddShoppingCartSharpIcon id='add-icon' /></Button>
    </div>
  )
}

export default Product