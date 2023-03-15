import React from "react";
import "../estilos/boton.css";


function Boton({name_button}){
    return (
        <button className="boton">
           {name_button}
        </button>

    );
}

export default Boton;
