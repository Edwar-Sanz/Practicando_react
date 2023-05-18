import React from "react";
import * as yup from "yup";
import { useState } from "react";
import Formulario from "./formulario";
import ResumenOperacion from "./resumenOperacion";
import Grid from "@mui/material/Grid";

//------validaciones que se repiten
const validaciones = yup
  .number()
  .typeError("Debe ser un número")
  .min(0, "Valor no puede ser negativo")
  .required("Campo requerido")

  
const AppClose = () => {
  //--------estados-------
  const [maxUni, setMaxUni] = useState();
  const [resultados, setResultados] = useState({});

  //-------inicializar el objeto validador------
  const validationSchema = yup.object({
    precioEntrada: validaciones,
    unidadesActuales: validaciones,
    precioActual: validaciones,
    venderUnidades: validaciones.max(maxUni, `Unidades disponibles ${maxUni}`)
  });

  // preEntrada: '23235', 
  // uniActuales: '235345', 
  // preActual: '353', 
  // venderUnidades: '2412'

  const handleForm = (values)=>{
    const result = {
      ok:true,
      valOperation : values.precioEntrada * values.unidadesActuales,
      valActual : values.unidadesActuales * values.precioActual,
      profitAntesCierre : 0,

      unisRestantes: values.unidadesActuales - values.venderUnidades,
      valUnisRestantes: 0,
      valActualUnisRestantes:0,
      profUnisRestantes:0,

      profCierre : 0
    }
    result.profitAntesCierre = result.valActual - result.valOperation ;
    result.valUnisRestantes = values.precioEntrada * result.unisRestantes;
    result.valActualUnisRestantes = result.unisRestantes * values.precioActual
    result.profUnisRestantes = result.valActualUnisRestantes - result.valUnisRestantes;
    result.profCierre = result.profitAntesCierre - result.profUnisRestantes
    
    setResultados(result);
  }

  

  return (
    <Grid
      className="AppClose"
      container
      padding={"25px"}
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      backgroundColor={"white"}
      justifyContent={"center"}
    >
      <Formulario validationSchema={validationSchema} setMaxUni={setMaxUni} handleForm={handleForm}/>
      <ResumenOperacion result={resultados}/>
    </Grid>
  );
};

export default AppClose;