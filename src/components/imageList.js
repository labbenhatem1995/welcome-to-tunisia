import React,{useState} from 'react';
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function ImageList({image}) {
    const [open,setOpen]=useState(false);
    
    const openModal=()=> {
        setOpen(true);
      }
    
      const closeModal=()=> {
        setOpen(false);
      }
    return (
        <div className='img-list'>
            <img  onClick={openModal} src={image} alt="img" className="photo"/>
            <Modal isOpen={open} onRequestClose={closeModal}  >
                <div className="modal"  onClick={closeModal}>
                   <img src={image} alt="img" /> 
                </div>

            </Modal>
        </div>
    )
}