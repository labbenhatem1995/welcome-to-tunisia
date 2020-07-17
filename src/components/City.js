import React from 'react';
import { Link } from 'react-router-dom';

export default function City({name,source}) {
    return (
        <article>
            <div className="img-container" >
                <img src={source}   alt="img"/>
                <Link to={`/tunisia/${name}`} className="btn-primary city-link" >discover</Link>
            </div>
            <p className="name">{name}</p>
        </article>
    )
}