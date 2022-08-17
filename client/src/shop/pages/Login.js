import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

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
        const req = await axios.post("http://localhost:5000/user/login", credentials)
        if(req.status == 200){
            window.sessionStorage.setItem('session', JSON.stringify(req.data))
            navigate('/')
        }
    }
  return (
  <div style = {{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:"100vw", height:'100vh'}} className="login">
    <NavBar style = {{}}/>
    <div style={{height:'fit-content', padding:'20px'}} className="form">
        <h1 style={{margin:0}}>Login</h1>
        <div className="input-field">
            <Input disableUnderline={true} id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='email'></Input>
        </div>
        <div className="input-field">
            <Input disableUnderline={true} type='password' id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='password'></Input>
        </div>
        <div className="login-btns">
            <Button style={{backgroundColor:'rgb(64, 94, 114)', color:'white'}} onClick={handleLoginClick}>Login</Button>

        </div>
        <p>Don't have an account? <NavLink style={{color:'white'}} to = '/register'>Register.</NavLink></p>
    </div>
  </div>
  )
}

export default Login