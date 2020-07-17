import React,{useState,useContext} from 'react';
import { Link,Redirect } from 'react-router-dom';
import logoImg from "../image/logo.jpg";
import { Card, Logo, Form, Input, Button} from "../components/authForm";
import axios from "axios";
import {TunisiaContext} from "../context";
import Home from "../pages/Home";


export default function Login() {
    const [user,setUser]=useState({email:"",password:""});
    const context = useContext(TunisiaContext);
    const {login,deconnexion,loginData,connexion}=context;
    const HandleSubmit=e=>{
        e.preventDefault();
        axios.post("http://localhost:5000/auth/login",{
            email:user.email,
            password:user.password
        })
        .then((res)=>{
             deconnexion();
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('userId',res.data.userId);
            connexion(res.data)
        })
        .catch((error)=>console.log(error))
        setUser({email:"",password:""});
    }
    if(login) {
        return <Redirect to={Home} />;
      }
    return (
        <Card>
      <Logo src={logoImg} />
      <Form >
        <Input
          type="username"
          placeholder="email"
          value={user.email}
          onChange={e=>setUser({...user,email:e.target.value})}
        />
        <Input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={e=>setUser({...user,password:e.target.value})}
        />
        <Button type="submit" onClick={HandleSubmit}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
    </Card>
    )
}