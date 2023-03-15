import React from "react";
import "../styles/pantalla_style.css"

function Pantalla({value, funClear}){
    return(
        <div className="pantalla_div"
        onClick={funClear}
        >
            {value}
        </div>
    );
}

export default Pantalla;