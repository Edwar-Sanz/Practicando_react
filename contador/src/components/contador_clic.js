import React from "react";
import "../estilos/contador_styles.css";


function Contador ({clicks}){
    return (
        <div className="container_contador">
           {clicks}
        </div>
    );
}

export default Contador;