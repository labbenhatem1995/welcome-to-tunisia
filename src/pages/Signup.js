import React,{useState} from 'react';
import { Link} from 'react-router-dom';
import logoImg from "../image/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/authForm';
import axios from "axios";

export default function Signup() {
    const [user,setUser]=useState({name:"",email:"",password:""});
    const [signup,setSignup]=useState('')

    const handleSubmit=e=>{
        e.preventDefault();
        axios.post("http://localhost:5000/auth/signup",{
            name:user.name,
            email:user.email,
            password:user.password
        })
        .then((res)=>{
            console.log(res.data)
            setSignup('User created !')
        });
        setUser({name:"",email:"",password:""})
    }

    return (
        <Card>
        <Logo src={logoImg} />
        <Form >
          <Input 
          type="text" 
          placeholder="username"
          value={user.name} 
          onChange={e=>setUser({...user,name:e.target.value})}
          required
          />
          <Input 
          type="email" 
          placeholder="email" 
          value={user.email}
          onChange={e=>setUser({...user,email:e.target.value})}
          required
          />
          <Input 
          type="password" 
          placeholder="password" 
          value={user.password}
          onChange={e=>setUser({...user,password:e.target.value})}
          required
          />
          <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        </Form>
        <Link to="/login">Already have an account?</Link>
        <p style={{margin:'2vw', color:"green"}}>{signup}</p>
        </Card>
    )
}