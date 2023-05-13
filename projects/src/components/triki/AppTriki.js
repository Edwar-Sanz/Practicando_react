import "./styles/Apptriki.css";
import Boton from "./components/button";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import BasicModal from "./components/modal";

const arr = [...Array(9).keys()];
const objs = arr.map((elemen, indix) => {
  return (elemen = { valor: null });
});

function AppTriki() {
  const [objets, setObjets] = useState(objs);
  const [open, setOpen] = useState(false);
  const [msj, setmsj] = useState("");
  let ganador = false;
  const funCambiaCont = (indexBoton) => {
    const newobj = [...objets];

    let x = 0;
    let o = 0;
    let n = 0;
    for (let i = 0; i < newobj.length; i++) {
      if (newobj[i].valor === "X") {
        x += 1;
      }
      if (newobj[i].valor === "O") {
        o += 1;
      }
      if (newobj[i].valor === null) {
        n += 1;
      }
    }
    if (x === o && newobj[indexBoton].valor === null) {
      newobj[indexBoton].valor = "X";
    } else if (x > o && newobj[indexBoton].valor === null) {
      newobj[indexBoton].valor = "O";
    }
    setObjets(newobj);
    calcularVictoria(newobj, "X", ganador);
    calcularVictoria(newobj, "O", ganador);

    if (n === 1 && ganador === false) {
      setmsj("Empante");
      setOpen(true);
      //alert("Empante");
      objets.map((item, indx) => (item.valor = null));
    }
  };

  const calcularVictoria = (ob, caracter) => {
    if (
      (ob[0].valor === caracter &&
        ob[1].valor === caracter &&
        ob[2].valor === caracter) ||
      (ob[3].valor === caracter &&
        ob[4].valor === caracter &&
        ob[5].valor === caracter) ||
      (ob[6].valor === caracter &&
        ob[7].valor === caracter &&
        ob[8].valor === caracter) ||
      (ob[0].valor === caracter &&
        ob[3].valor === caracter &&
        ob[6].valor === caracter) ||
      (ob[1].valor === caracter &&
        ob[4].valor === caracter &&
        ob[7].valor === caracter) ||
      (ob[2].valor === caracter &&
        ob[5].valor === caracter &&
        ob[8].valor === caracter) ||
      (ob[0].valor === caracter &&
        ob[4].valor === caracter &&
        ob[8].valor === caracter) ||
      (ob[2].valor === caracter &&
        ob[4].valor === caracter &&
        ob[6].valor === caracter)
    ) {
      //alert("Gana " + caracter);
      ganador = true;
      setmsj("Gana " + caracter);
      setOpen(true);
      ob.map((item, indx) => (item.valor = null));
    }
  };
  const gridItemProp = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
  };
 
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        sx={gridItemProp}
        xs={10}
        sm={10}
        md={5}
        display={"flex"}
        justifyContent={"center"}
      >
        <div className="AppTriki">
          {objets.map((element, index) => {
            return (
              <Boton
                key={index}
                indice={index}
                valorBoton={element.valor}
                funCambiaCont={funCambiaCont}
              />
            );
          })}
          <BasicModal
            mensaje={msj}
            isOpen={open}
            isClose={() => setOpen(false)}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default AppTriki;
