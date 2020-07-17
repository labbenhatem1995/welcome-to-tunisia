import React,{useContext} from 'react';
import items from '../data';
import { Link } from 'react-router-dom';
import Background from "../components/Background";
import Texte from "../components/Texte";
import {TunisiaContext} from "../context";
import PublicationList from "../components/publicationList"

export default function Governorate(props) {
    const name=props.match.params.name;
    const city=items.findIndex(item=>item.name===name);
    const context = useContext(TunisiaContext);
        if(city===-1){
            return(
                <div className="error">
                    <h3>page not found</h3>
                    <Link to="/tunisia" className="btn-primary">discover tunisia</Link>
                </div>
            );
        }
        return(
            <>
            <Background image={items[city].images[1]} clName={"defaulttunisia tunisia"}>
                <Texte title={items[city].name} subtitle={`discover ${items[city].name}`}>
                    <Link to="/tunisia" className="btn-primary">discover tunisia</Link>
                </Texte>
            </Background>
            <PublicationList data={context.publication.filter(item=>item.place===name)}/>
            </>
        );
}
