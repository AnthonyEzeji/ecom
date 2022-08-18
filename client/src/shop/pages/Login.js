import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Drawer from '../components/Drawer';
import NavBar from '../components/NavBar';
import '../css/Login.css'
function Login() {
    var navigate = useNavigate()
    const [credentials, setCredentials] = useState({email:"", password:""})
    function handleCredentialsChange(e){
        switch (e.target.placeholder) {
            case 'email':
                setCredentials({...credentials,email:e.target.value})
                break;
                case 'password':
                setCredentials({...credentials,password:e.target.value})
                break;
        
            default:
                break;
        }
    }
    async function handleLoginClick(){
        const req = await axios.post("http://44.208.28.123:5000/user/login", credentials)
        if(req.status == 200){
            window.sessionStorage.setItem('session', JSON.stringify(req.data))
            navigate('/')
        }
    }
  return (
  <div style = {{}} className="login">
    <NavBar style = {{}}/>

    <Drawer/>
    <div style={{height:'fit-content', padding:'20px'}} className="login-form">
        <h1 style={{   fontFamily: 'Alumni Sans Pinstripe',margin:0}}>Login</h1>
        <div className="input-field">
            <Input disableUnderline={true} id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='email'></Input>
        </div>
        <div className="input-field">
            <Input disableUnderline={true} type='password' id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='password'></Input>
        </div>
        <div className="login-btns">
            <Button style={{backgroundColor:'rgb(149, 129, 204)', color:'black'}} onClick={handleLoginClick}>Login</Button>

        </div>
        <p>Don't have an account? <NavLink style={{color:'white'}} to = '/register'>Register.</NavLink></p>
    </div>
  </div>
  )
}

export default Login