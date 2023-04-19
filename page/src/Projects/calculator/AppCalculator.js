import "./styles/App.css";
import Pantalla from "./components/pantalla.js";
import Boton from "./components/boton.js";
import { useState } from "react";
import Grid from "@mui/material/Grid";

const buttons = [7, 8, 9, "/", 4, 5, 6, "*", 3, 2, 1, "-", 0, ".", "=", "+"];

function Appcalculator() {
  const [Valor, setValor] = useState("");

  const agregarInput = (item) => {
    if (item === "=") {
      try {
        setValor(eval(Valor).toFixed(1));
      } catch {
        setValor("");
      }
    } else {
      setValor(Valor + item);
    }
  };

  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };
  const stiles = {
    textAlign: "justify",
    backgroundColor: "#fff",
    padding: "12px 12px",
    margin: "8px"
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp}>
        <div className="App">
          <div className="calc_container">
            <Pantalla value={Valor} funClear={() => setValor("")} />
            {buttons.map((item) => {
              return (
                <Boton item={item} key={item} funtionClic={agregarInput} />
              );
            })}
          </div>
        </div>
      </Grid>
      <Grid item sx={gridItemProp}  xs={ 10} sm={10} md={5}>
        <div>
        <h4 style={stiles}> Calculator </h4>
        <p style={stiles}>Este proyecto tiene como objetivo crear una calculadora completamente funcional que permite borrar los cálculos haciendo clic en la pantalla. Además, en caso de que se realice una operación no válida, la pantalla también se borrará automáticamente.</p> 
        <p style={stiles}>Se trata del primer proyecto que he desarrollado utilizando ReactJS.  Me ha permitido adentrarme en el mundo de React, aprender cómo funcionan los componentes y comprender cómo se realiza el renderizado de la aplicación.</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Appcalculator;
