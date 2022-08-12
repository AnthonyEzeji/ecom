import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Drawer from '../components/Drawer'
import NavBar from '../components/NavBar'
import Product from '../components/Product'

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
            await axios.get('http://localhost:5000/products').then(res=>{
                
                setProducts(res.data)
             })
        }
     getProducts()
    }, [])
 
    
    
  return (
    <div>
        <NavBar/>
        <Drawer/>
        {products.filter((product)=>{
        console.log(brand)
        if(brand==null){
            return true
        }else{
            console.log(product.category == brand?.toLowerCase())
            return product.category?.toLowerCase() == brand?.toLowerCase()
        }
        
    }).map(product=>{
        return(<Product product={product}/>)
    })}</div>
  )
}

export default ProductPage