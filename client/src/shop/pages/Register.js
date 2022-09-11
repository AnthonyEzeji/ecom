import { Button, Input } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Drawer from '../components/Drawer';
import NavBar from '../components/NavBar';
import '../css/Register.css'
function Register() {
    const [user, setUser] = useState({email:"", password:"", firstName:"", lastName:""});
    const navigate = useNavigate()
    async function handleRegisterClick(e){
        e.preventDefault()
        await axios.post('http://3.87.187.44:5001/user/register',user).then(res=>{
            console.log(res.data)
            if(res.data.hasOwnProperty('message')){
                alert(res.data.message)
            }else if (res.status==201){
                alert('Account created!')
                navigate('/login')
            }
        
        })    }

    function handleUserChange(e){
        
       switch (e.target.placeholder) {
        case "First Name":
            setUser({...user, firstName:e.target.value})
            break;
            case "Last Name":
                setUser({...user, lastName:e.target.value})
                break;
                case "Email":
                    setUser({...user, email:e.target.value.toString()})
                    break;
                    case "Password":
                    setUser({...user, password:e.target.value.toString()})
                    break;        
       
        default:
            break;
       }
    }
  return (
<div className="register">

<NavBar/>
<Drawer/>
<div className="form">
    
    <h1>Register</h1>
    <div className="input-field">
        <Input  onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} placeholder='First Name'></Input>
    </div>
    <div className="input-field">
        <Input onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} placeholder='Last Name'></Input>
    </div>
    <div className="input-field">
        <Input required={true} pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/</div>' type='email' onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true}  placeholder='Email'></Input>
    </div>
    <div className="input-field">
        <Input onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} type='password' placeholder='Password'></Input>
    </div>

<div className="form-btns">
    <Button type = 'submit' style ={{backgroundColor:'rgb(64, 94, 114)', color:'white'}} onClick = {(e)=>handleRegisterClick(e)}>Register</Button>
</div>
<p>Already have an account? <NavLink style={{ color:'white'}} to ="/login"> Login.</NavLink></p>
</div>

</div>
  )
}

export default Register