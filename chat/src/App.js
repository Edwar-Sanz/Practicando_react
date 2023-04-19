import './styles/App.css';
import Entrada from './components/entrada.js';
import Dialogo from './components/dialogo.js';
import { useState, useRef} from 'react';

const apiKey = "aqui va la key";

const callGpt = async (mensaje)=>{
    return fetch("https://api.openai.com/v1/completions", {
        method: "post",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: mensaje,
            max_tokens: 2000,
            temperature: 0,
        })
    })
    .then(response => response.json())
    .then(data => {return data});
}

const pruebaArray = [
    ["Sed ut perspiciatis unde olsantium doloremqu",
    "laudantium, totam rem aperiae ab illasnt explicabo. Nemo "
    ],
    ["Sed ut perspiciatis dopqu",
    "laudantium, tperspiciatis ulicabo. Nemm doloremnde olsantium o d ut perspiciatis doplicabo. "
    ],
    ["pregunta",
    "respuesta"
    ]
]

//------------------respuestas--------------------------------------
const preguntasParaChat = ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿Dónde vives?"];
const parejas = [
    
    {
        pregunta: "¿Cómo te llamas?",
        respuesta: "Me llamo Jhon"
    },
    {
        pregunta: "¿Cuántos años tienes?",
        respuesta: "Tengo 28 años"
    },
    {
        pregunta: "¿Dónde vives?",
        respuesta: "Vivo en Colombia"
    }
]

function generarPregunta( userInput){
    return `¿Cual de las siguientes opciones "${preguntasParaChat.join(" \n ")}" concuerda con la siguiente frase "${userInput}"?`
}

function App() {

//-----------------estados-------------------------------------
    
    const [data, setData] = useState(pruebaArray);
    const [pensando, setPensando] = useState(false);
    
//---------------manejar formulario----------------------------

    const refForm = useRef(null);
    const handleSubmit = async (e)=>{
        setPensando(true);
        e.preventDefault(); //para no recargar
        const entrada = refForm.current.value; //valor del input
        const respuestaGpt = await callGpt(generarPregunta(entrada));
        const match = respuestaGpt.choices[0].text.replaceAll('"', "").trim();
        const buscaRespuesta = parejas.find(item => item.pregunta === match);

        setPensando(false);
        refForm.current.value = ""; //resetea el valor del input
        setData([...data, [entrada, buscaRespuesta.respuesta]]);  //agrega array al principal     
    }

//--------------------------------------------------------------   
    return (
        <div style={{display: "flex"}}> 
        <div className="App">
            <div className="top" >
                {
                data.map( 
                    (element, index)=>{
                        return <Dialogo
                            key={index}
                            pregunta={element[0]}
                            respuesta={element[1]}
                            
                        />
                    }
                )
                }
            </div>
            {pensando && (
                <h4>....</h4>
            )}
            <div className="bot">
                <Entrada 
                    handleSubmit={handleSubmit}
                    refInput = {refForm}
                />
            </div>
        </div>
        </div>
    );
}

export default App;
