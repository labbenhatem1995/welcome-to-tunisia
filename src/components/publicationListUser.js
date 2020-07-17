import React,{useContext} from 'react';
import ImageList from './imageList'
import logo from '../image/map-pin.svg';
import flag from  "../image/Flag.png";
import axios from "axios";
import {TunisiaContext} from "../context";
import deleteIcon from  "../image/1214428.svg";



export default function PublicationListUser({data}) {
    const context = useContext(TunisiaContext);
    const add=context.add;
    const handleDelete=(Id)=>{
        axios.delete(`http://localhost:5000/publication/${Id}`,{_id:Id})
        .then(()=>{
            add();
        })
    }
    
    const publication=data.map((item,index)=>{
        return(
            <div className="publication-container" key={index} >
                <div>
                    <div>
                       <img className="img-flag" alt="img" src={flag}  />
                       <h2 className='title-h'>{item.name}</h2>
                    </div>
                    <div className='publication-body' >
                        <h4>{item.title}</h4>
                        <div>
                          <img className='img-logo' alt="img" src={logo} />
                          <h6 className='title-h' >{item.place}</h6>
                        </div>
                        <p>{item.description}</p>
                        <div style={{display:"flex"}}>
                         {item.imageUrl.map((el,index)=>{
                          return (
                                <ImageList image={el} key={index}/>
                            );
                          })}
                        </div>
                   </div>
                </div>
                <img className='img-delete' src={deleteIcon} alt="img" onClick={()=>handleDelete(item._id)} />
            </div>
        );
    })
    return (
        <div>
           {publication} 
        </div>
    )
}