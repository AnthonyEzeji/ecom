import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  <div className="login">
    <div className="form">
        <div className="input-field">
            <Input disableUnderline={true} id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='email'></Input>
        </div>
        <div className="input-field">
            <Input disableUnderline={true} id = 'input' onChange = {(e)=>handleCredentialsChange(e)} placeholder='password'></Input>
        </div>
        <div className="login-btns">
            <Button onClick={handleLoginClick}>Login</Button>
        </div>
    </div>
  </div>
  )
}

export default Login