import '../styles/modal.css';
import { useState } from 'react';


function Modal({elemento_del_array, isOpen, propFunOcultar, handleEdit }) {

    const [Valuetitulo, setValuetitulo] = useState(elemento_del_array.title);
    const [Valuetext, setValuetext] = useState(elemento_del_array.msj);
    
    const FunSaveEdit = ()=>{
        const nuevoElemento = {
            title: Valuetitulo,
            msj: Valuetext
        };
        handleEdit(nuevoElemento);
        propFunOcultar();
    };

    if (isOpen === true) {
        return(
            <div className="modal">           
                <textarea 
                    className="modal_title" 
                    value={Valuetitulo}
                    onChange={(e)=>setValuetitulo(e.target.value)}>                  
                </textarea>
                <button 
                    className="modal_button" 
                    onClick={() => FunSaveEdit()}
                    >✅
                </button>
                <textarea 
                    className="modal_msj"  
                    value={Valuetext}
                    onChange={(e)=>setValuetext(e.target.value)}> 
                </textarea>
            </div>
        );
    }
}

export default Modal;