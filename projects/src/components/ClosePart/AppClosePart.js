import React from "react";
import * as yup from "yup";
import { useState } from "react";
import Formulario from "./formulario";
import ResumenOperacion from "./resumenOperacion";
import ResumenCierre from "./resumenCierre";

//------validaciones que se repiten
const validaciones = yup
  .number()
  .typeError("Debe ser un número")
  .min(0, "Valor no puede ser negativo")
  .required("Campo requerido")

  
  const AppClose = () => {
    //--------estados-------
    const [maxUni, setMaxUni] = useState();

    //-------inicializar el objeto validador------
    const validationSchema = yup.object({
      precioEntrada: validaciones,
      unidadesActuales: validaciones,
      precioActual: validaciones,
      venderUnidades: validaciones.max(maxUni, `Unidades disponibles ${maxUni}`)
    });

  return (
    <div style={{display:"flex"}}>
      <Formulario validationSchema={validationSchema} setMaxUni={setMaxUni}/>
      <ResumenOperacion/>
      <ResumenCierre/>

    </div>
  );
};

export default AppClose;