import React from "react";
import "../styles/butons_styles.css"

function Boton({item, funtionClic}){
    return(
        <div className="boton"
            onClick={() => funtionClic(item)}
            key={item}   
        >
            {item}
        </div>
    );
}

export default Boton;