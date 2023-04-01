import './styles/App.css';
import Entrada from './components/entrada.js';
import Dialogo from './components/dialogo.js';
import { useState } from 'react';

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
const respuestas = ["hi", "bye"];

function App() {

//-----------------estados-------------------------------------
    
    const [data, setData] = useState(pruebaArray);
    const [par, setPar] = useState([]);
//---------------manejar formulario----------------------------
    const [pregunta, setPregunta] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault(); //para no recargar
        const entrada = document.getElementById("pregunta").value; //id del input y valor
        setPregunta(entrada);
        document.getElementById("pregunta").value = ""; //resetea el valor del input
        
        setPar([pregunta, respuestas[0]]); // guarda array aux
        setData([...data, par]);  //agrega array al principal     
    }

    
    return (
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
            <div className="bot">
                <Entrada handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
}

export default App;
