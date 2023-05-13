import '../styles/entrada.css';

function Entrada({handleSubmit, refInput}) {
    return (   
        <form id="formChat" onSubmit={(e)=> handleSubmit(e)}>
            <input  ref={refInput} type="text" id="pregunta" placeholder="Escribe tu mensaje"></input>
            <button id="boton" type="submit">Enviar</button>
        </form>       
    );
}

export default Entrada;