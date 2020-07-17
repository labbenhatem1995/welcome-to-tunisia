import React from 'react';
import Background from "../components/Background";
import Texte from "../components/Texte"
import { Link } from 'react-router-dom';
import items from "../data";
import tunisiaGouvernorates from "../image/Governorates_of_Tunisia_named_es.svg.png";
import tunisiaMap from "../image/tunisia-map.PNG"


export default function Home() {
    let image=Math.round(Math.random()*20);
    return (
        <>
        <Background image={items[image].images[0]} clName={"defaulttunisia"} >
            <Texte title="welcome to tunisia" subtitle="visit tunisia">
                <Link to="/tunisia" className='btn-primary'>discover tunisia</Link>
            </Texte>
        </Background>
        <div className="text-container">
            <p className='texte'>
            There’s so much to see and do in each region of Tunisia: a wide variety of landscapes,
             a coastline spanning 1,250km, studded with islands and archipelagos, a fantastic array 
             of traditions and customs and a rich historical heritage. We are delighted to introduce you to these
              regions by breaking them down into three areas: the north, the centre and the south.
            </p>
        </div>
        <div>
            <div className="tunisia-map" >
                <div className="map" >
                    <img src={tunisiaMap}  alt="img" />
                </div>
                <div className="tunisia-gouv" >
                    <img src={tunisiaGouvernorates}  alt='img' />
                </div>
            </div>
        </div>
        </>
    )
}