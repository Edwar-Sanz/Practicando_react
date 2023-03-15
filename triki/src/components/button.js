import '../styles/boton.css';


function Boton({valorBoton, funCambiaCont, indice}) {
    
    return (
        <button 
            className="boton"
            onClick={()=>funCambiaCont(indice)}
        > {valorBoton}
        </button>
    );
}

export default Boton;
