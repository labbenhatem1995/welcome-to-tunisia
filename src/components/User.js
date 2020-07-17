import React from 'react';
import Background from "./Background";
import Texte from './Texte';
import items from "../data";
import { Link } from 'react-router-dom';

export default function User() {
    let image=Math.round(Math.random()*20)
    return (
        <>
           <Background image={items[image].images[1]} clName={"defaulttunisia tunisia"} >
            <Texte title={`welcome ${localStorage.getItem('name')}`} subtitle="">
                <Link to="/tunisia" className='btn-primary'>discover tunisia</Link>
            </Texte>
           </Background> 
        </>
    )
}
