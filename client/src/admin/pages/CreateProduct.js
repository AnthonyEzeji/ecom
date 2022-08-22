import React, { useState } from 'react'
import {Button, Input} from '@mui/material'
import axios from 'axios'
function CreateProduct() {
    const [product, setProduct] = useState({title:"", image:'', description:'', stock:0, price:0,category:''})
    function handleChange(e){
        switch(e.target.id) {
            case 'title':
                console.log(e.target.value)
              setProduct({...product, title:e.target.value})
              break;
            case 'image':
                console.log(e.target.value)
                setProduct({...product, image:e.target.value})
              break;
              case 'description':
                console.log(e.target.value)
                setProduct({...product, description:e.target.value})
              break;
              case 'stock':
                console.log(e.target.value)
                setProduct({...product, stock:e.target.value})
              break;
              case 'price':
                console.log(e.target.value)
                setProduct({...product, price:e.target.value})
              break;
              case 'category':
                console.log(e.target.value)
                setProduct({...product, category:e.target.value})
              break;
            default:
              // code block
          }
    }
    async function  handleCreateProductClick(){
        await axios.post('http://3.87.187.44:5000/products', product)
    }
  return (
   
    <div className = 'create-product'>
        <div className="form">
            <div className="input-field">
                <h5>
                    Title
                </h5>
                <Input id='title' onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            <div className="input-field">
                <h5>
                    Image
                </h5>
                <Input id ="image" onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            <div className="input-field">
                <h5>
                    Description
                </h5>
                <Input id ="description" onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            <div className="input-field">
                <h5>
                    Stock
                </h5>
                <Input id ="stock" onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            <div className="input-field">
                <h5>
                    Price
                </h5>
                <Input id ="price" onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            
            
            <div className="input-field">
                <h5>
                    Category
                </h5>
                <Input id ="category" onChange={(e)=>handleChange(e)} variant='contained'></Input>
            </div>
            <Button onClick={(handleCreateProductClick)} >Create Product</Button>
        </div>
    </div>
  )
}

export default CreateProduct