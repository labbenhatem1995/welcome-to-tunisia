import React, { useState,useEffect} from 'react';
import axios from "axios";

const TunisiaContext=React.createContext();

export default function TunisiaProvider(props) {
    const [login,setLogin]=useState(false);
    const [loginData,setLoginData]=useState(localStorage||{})
    const [publication,setPublication]=useState("");
    const [add,setAdd]=useState(0)

    const handleAdd=()=>{
        setAdd(add+1)
    }

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            "http://localhost:5000/publication"
          );
          setPublication(result.data);
        };
        fetchData();
      }, [add]);

    useEffect(() => {
        if(login===false){
            setLoginData({})
        }
    }, [login])

    const connexion=auth=>{
        setLoginData(auth)
    }

    const deconnexion=()=>{
        setLogin(!login)
    }

    return (
        <TunisiaContext.Provider value={{login:login,deconnexion:deconnexion,loginData:loginData,connexion:connexion,publication:publication,add:handleAdd}}>
            {props.children}
        </TunisiaContext.Provider>
    )
}


export {TunisiaProvider,TunisiaContext}