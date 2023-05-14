import "./styles/AppCalc.css";
import Pantalla from "./components/pantalla.js";
import Boton from "./components/boton.js";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { create, all } from 'mathjs'

const buttons = [7, 8, 9, "/", 4, 5, 6, "*", 3, 2, 1, "-", 0, ".", "=", "+"];

function Appcalculator() {
  const [Valor, setValor] = useState("");

  const math = create(all)

const agregarInput = (item) => {
    if (item === "=") {
      try {
        setValor(math.evaluate(Valor).toFixed(1));
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
  
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={ 10} sm={10} md={5} >
        <div className="AppCalc">
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
    </Grid>
  );
}

export default Appcalculator;
