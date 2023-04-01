import '../styles/card.css';
import Modal from "./modal.js"
import { useState} from "react";


function Card({elemento_del_array, propIndice_del_arrayCard, propFunBorrarElementocard}) {

//----------------se crean los estados---------------------------
    const [mostrarModal, setmostrarModal] = useState(false);
    const [elementArr, setElementArr] = useState(elemento_del_array);

//--------------funciones y manejadores---------------------------
    const funmostrarModal = () =>{ setmostrarModal(true);  };
    const funOcultar      = () =>{ setmostrarModal(false); };
    const handleEditElement = (updatedElement) => { setElementArr(updatedElement);}

    return (
        <>
            <div className="card">
                <div 
                    className="card_title" >{elementArr.title} 
                </div>
                <button 
                    className="card_button" 
                    onClick={() => propFunBorrarElementocard(propIndice_del_arrayCard)}
                    >❌
                </button>
                <button 
                    className="card_buttonEdit" 
                    onClick={() =>  funmostrarModal() }
                    >🖊️
                </button>
                <div 
                    className="card_msj"   
                    >{elementArr.msj}
                </div>
                
            </div>
            <Modal
                elemento_del_array={elemento_del_array}
                propIndice_del_arrayCard={propIndice_del_arrayCard}
                propFunOcultar={funOcultar}
                isOpen={mostrarModal}
                handleEdit={handleEditElement}
            />
        </>
    );
}

export default Card;