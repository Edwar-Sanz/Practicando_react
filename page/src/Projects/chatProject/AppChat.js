import "./styles/App.css";
import Entrada from "./components/entrada.js";
import Dialogo from "./components/dialogo.js";
import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";

const apiKey = "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";

const callGpt = async (mensaje) => {
  return fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: mensaje,
      max_tokens: 2000,
      temperature: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};



const pruebaArray = [
  ["Bienvenido al chatBot.",
  "Puedes hacer preguntas para conocer más acerca de mi."
  ],
  ["El Prompt es procesado, y la respuesta será basada en mi información personal",
  "por ejemplo puedes empezar escribiendo, Hola o ¿Cómo te llamas?"
  ]
]

//------------------respuestas--------------------------------------
const preguntasParaChat = [
  "¿Hola?",
  "¿Cómo te llamas?",
  "¿Cuántos años tienes?",
  "¿Dónde vives?",
  "¿Qué haces actualmente?",
  "¿Qué lenguajes de programación conoces?",
  "¿Dónde estudias programación?",
  "¿Cuáles proyectos has realizado?",
  "no match"
];
const parejas = [
  {
    pregunta: "¿Hola?",
    respuesta: "Hola, hacerme preguntas puntuales por medio de este chat."
  },
  {
    pregunta: "¿Cómo te llamas?",
    respuesta: "Me llamo Edwar."
  },
  {
    pregunta: "¿Cuántos años tienes?",
    respuesta: "Tengo 28 años."
  },
  {
    pregunta: "¿Dónde vives?",
    respuesta: "Vivo en Colombia."
  },
  {
    pregunta: "¿Qué haces actualmente?",
    respuesta: "Actualmente me dedico al trading y estudio programación."
  },
  {
    pregunta: "¿Qué lenguajes de programación conoces?",
    respuesta: "Python, JavaScript y Mql5."
  },
  {
    pregunta: "¿Dónde estudias programación?",
    respuesta: "Soy autodidacta, aprendo con material de internet, practicando con proyectos y leyendo la documentación."
  },
  {
    pregunta: "¿Dónde estudias programación?",
    respuesta: "Soy autodidacta, aprendo con material de internet, practicando con proyectos y leyendo la documentación."
  },
  {
    pregunta: "¿Cuáles proyectos has realizado?",
    respuesta: "He aplicado mis habilidades para desarrollar proyectos relacionados con el trading y la web"
  },
  {
    pregunta: "no match",
    respuesta: "No hay información para esa pregrunta, puedes intentar con otra pregunta similar"
  },
];

function generarPregunta(userInput) {
  return `¿Cual de las siguientes opciones: "${preguntasParaChat.join("-")}",
  concuerda con la siguiente frase: "${userInput}"?,
  Solo se debe elegir una opción, las opciones estan separadas por "-" y
  la respuesta debe ser exacta a alguna de las opciones: "${preguntasParaChat.join("-")}",
  en caso de que no coincida ninguna opción, la respuesta deberá ser: "no match",
  SIEMPRE debes dar una respuesta exacta que esté en las opciones dadas.`;
}

function AppChat() {
  //-----------------estados-------------------------------------

  const [data, setData] = useState(pruebaArray);
  const [pensando, setPensando] = useState(false);

  //---------------manejar formulario----------------------------

  const refForm = useRef(null);
  const handleSubmit = async (e) => {
    setPensando(true);
    e.preventDefault(); //para no recargar
    const entrada = refForm.current.value; //valor del input
    const respuestaGpt = await callGpt(generarPregunta(entrada));
    const match = respuestaGpt.choices[0].text.replaceAll('"', "").trim();
    const buscaRespuesta = parejas.find((item) => item.pregunta === match);

    setPensando(false);
    refForm.current.value = ""; //resetea el valor del input
    setData([...data, [entrada, buscaRespuesta.respuesta]]); //agrega array al principal
    

  };

  //----------------estilos del grid--------------------------------------------
  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    xs: 10,
  };

  //--------------------------------------------------------------
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp}>
        <div style={{ display: "flex"}}>
          <div className="AppChat">
            <div className="top">
              {data.map((element, index) => {
                return (
                  <Dialogo
                    key={index}
                    pregunta={element[0]}
                    respuesta={element[1]}
                  />
                );
              })}
            </div>
            {pensando && <h4>....</h4>}
            <div className="bot">
              <Entrada handleSubmit={handleSubmit} refInput={refForm} />
            </div>
          </div>
        </div>
      </Grid>
      <Grid item sx={gridItemProp}>
        <div>
          <h3>hola</h3>
        </div>
      </Grid>
    </Grid>
  );
}

export default AppChat;
