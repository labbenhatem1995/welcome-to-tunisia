import React,{useState,useContext} from 'react';
import {Link} from "react-router-dom";
import {FaAlignRight} from 'react-icons/fa';
import {TunisiaContext} from '../context';

export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen)
   }
   const context=useContext(TunisiaContext);
   const {login,deconnexion}=context;
   const connect=()=>{
       if(login===false&&!localStorage.getItem("token")){
           return(
            <li>
               <Link to="/login" >Connexion</Link>
            </li>
           )
       }
       return(
           <>
            <li>
                <Link to='/profil'>Profil</Link>
            </li>
            <li>
                <Link to="/" onClick={()=> {
                    localStorage.removeItem('token');
                    localStorage.removeItem('name');
                    localStorage.removeItem('userId');
                    deconnexion()
                    window.location.reload(false)
                }}>Deconnexion</Link>
            </li>
            </>
       )
   }
   const connexion=connect()
    return (
        <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <button type="button" className='nav-btn' onClick={handleClick}>
                            <FaAlignRight className="nav-icon"/>
                         </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>  
                      <li>
                          <Link to='/tunisia'>Tunisia</Link>
                      </li>
                      {connexion}
                    </ul>
                </div>
         </nav>
    )
}