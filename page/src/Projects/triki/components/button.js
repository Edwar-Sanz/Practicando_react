import '../styles/boton.css';


function Boton({valorBoton, funCambiaCont, indice}) {
    
    return (
        <button 
            className="botontriki"
            onClick={()=>funCambiaCont(indice)}
        > {valorBoton}
        </button>
    );
}

export default Boton;
