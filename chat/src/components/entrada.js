import '../styles/entrada.css';



function Entrada({handleSubmit}) {
    return (   
        <form id="formChat" onSubmit={()=> handleSubmit()}>
            <input type="text" id="pregunta" placeholder="Escribe tu mensaje"></input>
            <button id="boton" type="submit">Enviar</button>
        </form>       
    );
}

export default Entrada;