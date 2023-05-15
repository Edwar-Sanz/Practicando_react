import React from 'react';
import { Formik} from 'formik';


const BasicFormik = () => (
  <div>
    <h1>Formik</h1>
    {/* <Formik/> envuelve todo el formulario
         este tiene varios props por defecto
         que ayudan a manejar y validar los valores */}

    <Formik

      //algunos props y funciones que provee Formik son:
      // initialValues, onSubmit, handleSubmit, handleChange
      // values, errors, handleBlur, validate

      initialValues={{ name: '' }} //valores iniciales se accede a ellos con values
      
      //validaciones
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "ingresa un nombre";
        }
        return errors
      }}

      //lo que se ejecuta al enviar
      onSubmit={(values, {resetForm}) => {resetForm(); console.log(values)}}
    >

      {
      ({handleSubmit,handleChange, handleBlur, touched,values, errors}) => (
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            placeholder='Tu nombre'
          />

          {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}
          <button type="submit">Submit</button>

        </form>
      )
      }
    </Formik>
   </div>
);

export default BasicFormik;
