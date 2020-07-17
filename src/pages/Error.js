import React from 'react';
import Background from "../components/Background";
import homeImage from "../image/home.jpg";
import Texte from "../components/Texte"
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Background image={homeImage} clName={"defaulttunisia"}>
            <Texte title="404" subtitle="page not found">
                <Link to="/" className='btn-primary'>return to home</Link>
            </Texte>
        </Background>
    )
}
