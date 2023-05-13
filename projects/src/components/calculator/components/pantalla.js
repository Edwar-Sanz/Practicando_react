import React from "react";
import "../styles/pantalla_style.css"
import { useState } from "react";

function Pantalla({value, funClear}){

    const [auxvalue, setauxvalue] = useState(null);
    
    function handleEnter(){
        setauxvalue("click to clean");
    }
    function handleLeave(){
        setauxvalue(null);
    }

    return(
        <div className="pantalla_div"
        onClick={funClear}
        onMouseEnter={()=> handleEnter()}
        onMouseLeave={()=> handleLeave()}
        >   
            {auxvalue === null ? value : auxvalue}
        </div>
    );
}

export default Pantalla;