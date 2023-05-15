import Grid from "@mui/material/Grid";
import React from 'react';
import { Formik} from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  precioEntrada: yup
    .number('Enter your email')
    .typeError('Number')
    .min(0, 'Very small')
    .required('is required'),
});

function Formulario(){
  return (
    <Formik
      initialValues={{precioEntrada: ""}}
      validationSchema={validationSchema}
      onSubmit={
        (values)=> console.log(values)

      }
    >
    {
      ({errors, touched, handleSubmit, values, handleChange, handleBlur}) => (
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder='Precio Entrada'
            name="precioEntrada"
            label="Precio Entrada"
            value={values.precioEntrada}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.precioEntrada && Boolean(errors.precioEntrada)}
            helperText={touched.precioEntrada && Boolean(errors.precioEntrada)&& errors.precioEntrada}
          />
         
          <Button color="primary" variant="contained"  type="submit">
            Submit
          </Button>
        </form>
        )
      }     
    </Formik>
  );
}

function AppClose() {
  
  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={ 10} sm={10} md={6} >
        <div className="AppClosePart">
          <h1>hola</h1>
          <Formulario/>
        </div>
      </Grid>
    </Grid>
  );
}

export default AppClose;
