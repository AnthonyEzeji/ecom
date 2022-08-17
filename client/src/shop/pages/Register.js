import { Button, Input } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Register.css'
function Register() {
    const [user, setUser] = useState({email:"", password:"", firstName:"", lastName:""});

    async function handleRegisterClick(){
        await axios.post('http://localhost:5000/user/register',user)
    }

    function handleUserChange(e){
        
       switch (e.target.placeholder) {
        case "First Name":
            setUser({...user, firstName:e.target.value})
            break;
            case "Last Name":
                setUser({...user, lastName:e.target.value})
                break;
                case "Email":
                    setUser({...user, email:e.target.value})
                    break;
                    case "Password":
                    setUser({...user, password:e.target.value})
                    break;        
       
        default:
            break;
       }
    }
  return (
<div className="register">


<div className="form">
    <h1>Register</h1>
    <div className="input-field">
        <Input  onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} placeholder='First Name'></Input>
    </div>
    <div className="input-field">
        <Input onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} placeholder='Last Name'></Input>
    </div>
    <div className="input-field">
        <Input onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true}  placeholder='Email'></Input>
    </div>
    <div className="input-field">
        <Input onChange={(e)=>handleUserChange(e)} id="input" disableUnderline={true} type='password' placeholder='Password'></Input>
    </div>

<div className="form-btns">
    <Button style ={{backgroundColor:'rgb(64, 94, 114)', color:'white'}} onClick = {handleRegisterClick}>Register</Button>
</div>
<p>Already have an account? <NavLink style={{ color:'white'}} to ="/login"> Login.</NavLink></p>
</div>

</div>
  )
}

export default Register