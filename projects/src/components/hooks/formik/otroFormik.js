import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';


// los componentes Form, Field, ErrorMessage
  //permiten simplificar el código

const OtroFormik = () => (
  <div>
    <h4> Otro Formik</h4>
    <Formik
      initialValues={{ name: '' }} 
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "ingresa un nombre";
        }
        return errors
      }}
      onSubmit={(values, {resetForm}) => {resetForm(); console.log(values)}}
    >
      {/* formik deber tener una función dentro de la etiquetas que retornen el formulario */}
      {
      ({errors}) => (
        <Form >
          <Field
            type="text"
            name="name"
            placeholder='Tu nombre'
          />
          <ErrorMessage name='name'
            component={()=> <div style={{color:"red"}}>{errors.name}</div>}
          />
          <button type="submit">Submit</button>
        </Form>
      )
      }
    </Formik>
   </div>
);

export default OtroFormik;
