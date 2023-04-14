
import "../styles/ball.css";




function Ball({top, left}) {
    
    return (
        <div className="ball"
            style= {{top:`${top}px`, left:`${left}px`}}
        >
        </div>
    );
}

export default Ball;