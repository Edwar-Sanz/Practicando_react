import React from "react";
import "../styles/butons_styles.css"

function Boton({item, funtionClic}){
    return(
        <div className="botonCalc"
            onClick={() => funtionClic(item)}
            key={item}   
        >
            {item}
        </div>
    );
}

export default Boton;