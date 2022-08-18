import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product.js'
import NavBar from '../components/NavBar.js'
import "../css/Landing.css"
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { Button } from '@mui/material'
import Drawer from '../components/Drawer.js'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
function Landing() {
 
  


    const [products, setProducts] = useState([])
    const [previewProducts, setPreviewProducts] = useState([])
    const [index, setIndex] = useState(0)
    const [previewSize, setPreviewSize] = useState(5)
    
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
    if(window.innerWidth<=550){
      setPreviewSize(1)
      }else
    if(window.innerWidth<=800){
    setPreviewSize(2)
    }else if (window.innerWidth<=1250){
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
    var x = window.matchMedia("(max-width: 550px)")
    x.addListener(()=>{setPreviewSize(1)}) // Attach listener function on state changes
  return (
 <div className="landing">
    
    <NavBar/>
    <Drawer/>
   <div className="landing-image-container">
    <div className='landing-text' >
      <h1 style={{width:'fit-content',textAlign:'left',fontStyle:'italic',color:'rgb(44, 42, 45)', font:'Segoe UI', fontSize:'2.5vw'}}>
        
        Only Apple gets you <h4 style={{color:'rgb(1220, 40, 176)'}}>supercharged</h4>  for college.
      </h1>
      <div >
      <h2 style={{width:'fit-content',fontWeight:400,marginBottom:0,textAlign:'left',color:'rgb(44, 42, 45)',fontSize:'1.5vw'}}>
    Save on Mac or iPad with an education discount. Get 20% off AppleCare+.
    </h2>
    <h2 style={{width:'fit-content',marginTop:0,textAlign:'left',color:'rgb(220, 40, 176)',fontSize:'1.5vw', }}>
    And a gift card up to $150.
    </h2>
      </div>
    
    


    </div>
   <img className = 'landing-img' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-header-giftcard-202206?wid=1120&hei=1074&fmt=jpeg&qlt=90&.v=1655326451200" alt="" />
   </div>
    
    <div id= "shop-btn"><p>IN STOCK AND ON SALE! SHOP DISCOUNTED PRODUCTS AND GET THEM DELIVERED ASAP </p></div>
    <div className="landing-bottom">
    <div className="preview">
    <Button style={{height:'fit-content'}} onClick={()=>{changeIndex(-1)}}><ArrowCircleLeftIcon style = {{color:'black'}}/></Button>
    {previewProducts?.map((product,index)=>{
   
   return(<Product key={index} product={product}/>)
   })}
     <Button style={{height:'fit-content'}} onClick={()=>{changeIndex(1)}}><ArrowCircleRightIcon style = {{color:'black'}}/></Button>
    </div>
    </div>
   

 </div>
  )
}

export default Landing