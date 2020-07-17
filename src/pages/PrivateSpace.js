import React from 'react';
import Background from "../components/Background";
import tunisiaImage from "../image/tunisia.jpg";
import Texte from "../components/Texte";
import { Link } from 'react-router-dom';
import CityContainer from "../components/CityContainer"

export default function PrivateSpace() {
    return (
        <>
        <Background image={tunisiaImage} clName={"defaulttunisia tunisia"}>
            <Texte title="tunisia" subtitle="discover tunisia">
                <Link to="/" className='btn-primary'>return to home</Link>
            </Texte>
        </Background>
        <CityContainer/>
        </>
    )
}