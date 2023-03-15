import React from "react";
import "../estilos/container_reviews.css";


function Reviews({libro, autor, review, imagen}){
    return (
        <div className="container_reviews">
            <div className="imagen_reviews" >         
                <img className="imagen_reviews" 
                    src={require(`../images/${imagen}`)}
                    alt="imagen_1"
                />
            </div> 
            <div className="texto_reviews">
                <p className="nombre_libro">{libro}</p>
                <p className="autor_libro">{autor}</p>
                <p className="review_libro">{review}</p>
            </div>

        </div>

    );
}

export default Reviews;
