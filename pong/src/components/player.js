
import "../styles/player.css";



function Player ({top, left}) {
    
    return (
        <div className="player"
            style= {{top:`${top}px`, left:`${left}px`}}
            
        >
        </div>
    );
}

export default Player;