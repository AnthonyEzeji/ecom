import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Drawer from '../components/Drawer'
import NavBar from '../components/NavBar'
import Product from '../components/Product'
import '../css/ProductPage.css'
function ProductPage() {
    const [brand, setBrand] = useState('')
    const [products, setProducts] = useState([])
   
    var params = useParams()
    console.log(params)
    const [selected, setSelected] = useState('')
    useEffect(() => {
       setSelected("/"+params.brand)
        setBrand(params.brand)
       }, [params])
       
    useEffect(() => {
        async function getProducts(){
            await axios.get('http://44.208.28.123:5000/products').then(res=>{
                
                setProducts(res.data)
             })
        }
     getProducts()
    }, [])
 
    var navigate = useNavigate()
    function handleSliderClick(e){
        
        
navigate(`/products${e.target.id}`)
    }
   useEffect(() => {
    console.log(selected)
   }, [selected])
   
    
  return (
    <div className = 'product-page'>
        <NavBar/>
        <h1 onClick={()=>navigate('/products')}>Products</h1>

        <div className="slider" style={{display:"flex", width:300, justifyContent:'space-evenly', border:'1px solid black'}}>
           
            <div style={{textAlign:'center',border:'1px solid black' ,width:"33%",backgroundColor:selected=='/apple'&&'Black', color:selected=="/apple"?'white':'black'}} onClick={(e)=>handleSliderClick(e)} id ="/apple" className="slider-option">
                Apple
            </div>
            <div style={{textAlign:'center',border:'1px solid black' ,width:"33%",backgroundColor:selected=='/samsung'&&'Black', color:selected=="/samsung"?'white':'black'}} onClick={(e)=>handleSliderClick(e)} id = '/samsung' className="slider-option">
                Samsung
            </div>
            <div style={{textAlign:'center',border:'1px solid black' ,width:"33%",backgroundColor:selected=='/microsoft'&&'Black', color:selected=="/microsoft"?'white':'black'}} onClick={(e)=>handleSliderClick(e)} id = "/microsoft" className="slider-option">
               Microsoft
            </div>
        </div>
        <Drawer style= {{top:'50px', backgroundColor:'white'}}/>
        <Grid id = 'products' container >
        {products.filter((product)=>{
        
        if(brand==null){
            return true
        }else{
            console.log(product.category == brand?.toLowerCase())
            return product.category?.toLowerCase() == brand?.toLowerCase()
        }
        
    }).map(product=>{
        return(
        <Grid item xs = {12} sm = {6} md = {3} lg={2}>
            <Product product={product}/>
        </Grid>
        )
    })}
        </Grid>
    </div>
  )
}

export default ProductPage