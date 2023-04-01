import '../styles/dialogo.css';

function Dialogo({pregunta, respuesta}) {
    return (
        <div className="dialogo">
            <div className="pregunta">{pregunta}</div>           
            <div className="respuesta">{respuesta}</div>
        </div>
    );
}

export default Dialogo;
