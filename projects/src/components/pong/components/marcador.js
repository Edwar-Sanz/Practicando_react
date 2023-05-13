
function Marcador({ score, score2 }) {
  return (
    <div className="marcador">
      <div className="puntaje"> PUNTAJE JUGADOR 1: <strong>{score}</strong></div>
      <div className="puntaje"> PUNTAJE JUGADOR 2: <strong>{score2}</strong></div>
    </div>
  );
}

export default Marcador;
