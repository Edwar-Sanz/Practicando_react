import list from "./components/data.js";
import CardMap from "./components/cardMap.js";
import Template from "./components/template";
import { useState } from "react";
import Grid from "@mui/material/Grid";

function AppNotes() {
  const [DataList, setDataList] = useState(list);

  const funtAdd = (value_titulo, value_text) => {
    // si no estan vacios
    if (value_titulo !== "" && value_text !== "") {
      setDataList([{ title: value_titulo, msj: value_text }, ...DataList]); //agrega lo nuevo
    }
  };
  
  const FunBorrarElemento = (data, indice) => { 
    const a = [...data];
    const b = a.filter((element, index) => index !== indice);
    setDataList(b);
  };

  return (
    <Grid
      className="AppNotes"
      container
      padding={"25px"}
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Template padding={0} propFunAdd={funtAdd} />{" "}
      </Grid>

      <CardMap 
        DataList={DataList} 
        fnBorrarElemento={FunBorrarElemento}
        setDataList={setDataList}
      />
    </Grid>
  );
}

export default AppNotes;
