import React from 'react';
import items from "../data";
import City from "./City"

export default function CityContainer() {
    
    return (
        <section className="citylist">
            <div className="citylist-center">
                {
                    items.map((item,index)=>{
                        return <City key={index} name={item.name} source={item.images[0]}/>
                    })
                }
            </div>
        </section>
    )
}
