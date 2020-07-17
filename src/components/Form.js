import React,{useState,useContext} from 'react';
import items from '../data';
import axios from "axios";
import {TunisiaContext} from "../context";
import logo from '../image/ui.svg'

export default function Form() {
    const [publication, setPulication] = useState({title:"",place:"",description:""})
    const [path,setPath]=useState([])
    const [display,setDisplay]=useState('none')
    const context = useContext(TunisiaContext);
    const add=context.add;

    const city=items.map((item,index)=>{
        return (
            <option key={index} value={item.name}>{item.name}</option>
        );
    })
    const handleSubmit=e=>{
        e.preventDefault();
        const newPublication={
            title:publication.title,
            place:publication.place,
            image:path,
            description:publication.description,
            name:localStorage.getItem('name'),
            userId:localStorage.getItem('userId')
        }
        axios.post("http://localhost:5000/publication",newPublication)
        .then(res=>{setPulication({title:"",place:"",description:""});
        setPath([])
        add();
        setDisplay('none')
    })
    }
    return (
        <>
        <div className="add-publication" 
         onClick={()=>{
             if(display==="none"){setDisplay("block")}
             else{setDisplay("none")}
             }}>
            <img className="img-add" alt="img" src={logo} />
            <p className="p-add">hello {localStorage.getItem('name')}, would you like to add a publication? click here...</p>
        </div>
        <div id="container" className="card-form" style={{display:display}}>
            <form className="profil-form"  id="contact">
                <div className="input-form" >
                    <input 
                    type='file' 
                    onChange={event=>{
                    const data = new FormData() 
                    data.append('file', event.target.files[0])
                    axios.post("http://localhost:5000/upload",data)
                    .then(res => { 
                     setPath(path.concat(res.data.filePath))
                     })
                    }}
                    required/>
                    <div>
                        {path.map((el,index)=>{
                            return <img className="img-upload" alt="img" src={el}/>
                        })}
                    </div>
                </div>
                <input 
                className="input-form" 
                type="text" 
                placeholder="title" 
                value={publication.title}
                onChange={e=>setPulication({...publication,title:e.target.value})}
                required/>
                <select className="input-form" 
                value={publication.place}
                onChange={e=>setPulication({...publication,place:e.target.value})}
                 >
                    {city}
                </select>
                <textarea 
                value={publication.description}
                className="input-form"
                onChange={e=>setPulication({...publication,description:e.target.value})}
                >description</textarea>
                <button className="btn-form" type="submit" onClick={handleSubmit}>submit</button>
            </form>
        </div>
        </>
    )
}
