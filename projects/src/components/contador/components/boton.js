import React from 'react';
import "../estilos/boton_styles.css";

function Boton ({texto, esbotonClic, manejarClick}){


    return(
        <button
            className={ esbotonClic ? "boton_clic" : "boton_reiniciar" }
            onClick={manejarClick}
        >           
            {texto}
        </button>
    );
}

export default Boton;