import React,{useContext} from 'react';
import {TunisiaContext} from "../context";
import { Redirect } from 'react-router-dom';
import Home from "../pages/Home";
import Form from "../components/Form";
import User from "../components/User";
import PublicationListUser from "../components/publicationListUser";


export default function Profil() {
    const context = useContext(TunisiaContext);
    const publication=context.publication;
    
    if(!localStorage.getItem('token')){
        return <Redirect path="/" to={Home} />;
    }
    else if(publication){
    return (
        <div>
            <User/>
            <Form/>
            <PublicationListUser data={context.publication.filter(item=>item.userId===localStorage.getItem('userId'))}/>
        </div>
    )
    }
    return (
    <div>
        <div>
            <User/>
            <Form/>
        </div>
    </div>
    )
}