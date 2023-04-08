
// import Table from "./components/table.js";


function Marcador({score, score2}) {
    
    return (
        <div className="marcador">
           <div className="puntaje"> PUNTAJE JUGADOR 1: {score}</div>
           <div className="puntaje"> PUNTAJE JUGADOR 2: {score2}</div>
        </div>
    );
}

export default Marcador;