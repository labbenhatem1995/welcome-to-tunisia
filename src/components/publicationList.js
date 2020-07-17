import React from 'react';
import ImageList from './imageList'
import logo from '../image/map-pin.svg';
import flag from  "../image/Flag.png"


export default function PublicationList({data}) {
    
    const publication=data.map(item=>{
        return(
            <div className="publication-container" key={item.userId} >
                <div>
                    <div>
                       <img className="img-flag" alt="img" src={flag}  />
                       <h2 className='title-h'>{item.name}</h2>
                    </div>
                    <div className='publication-body' >
                        <h4>{item.title}</h4>
                        <div>
                          <img className='img-logo' alt="img" src={logo} />
                          <h6 className='title-h'>{item.place}</h6>
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
            </div>
        );
    })
    return (
        <div>
           {publication} 
        </div>
    )
}