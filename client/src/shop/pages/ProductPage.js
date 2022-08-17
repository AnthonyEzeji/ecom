import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Drawer from '../components/Drawer'
import NavBar from '../components/NavBar'
import Product from '../components/Product'
import '../css/ProductPage.css'
function ProductPage() {
    const [brand, setBrand] = useState('')
    const [products, setProducts] = useState([])
    var params = useParams()
    console.log(params)
    useEffect(() => {
        setBrand(params.brand)
       }, [params])
    useEffect(() => {
        async function getProducts(){
            await axios.get('http://3.92.186.223:5000/products').then(res=>{
                
                setProducts(res.data)
             })
        }
     getProducts()
    }, [])
 
    
    
  return (
    <div className = 'product-page'>
        <NavBar/>
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