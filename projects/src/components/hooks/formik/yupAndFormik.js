import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// yup permite validar facilmente los datos 

// se crear un objeto yup
const validations = Yup.object().shape({
  username: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Only alpha')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.number()
  .typeError('age must be a number')
  .min(0, 'Too Short!')
  .required('Required')
});

//se pasan las validaciones en el prop validationSchema
const YupAndFormik = () => (
  <div>
    <h4>yup and formik</h4>
    <Formik
      initialValues={{ username: '', age:'' }} 
      validationSchema={validations}
      onSubmit={(values, {resetForm}) => {resetForm(); console.log(values)}}
    > 
    {
    ({errors, touched}) => (
      <Form >
        <Field type="text" name="username" placeholder='Tu nombre'/>
        {touched.username &&
          <ErrorMessage name='username'
            component={()=> <div style={{color:"red"}}>{errors.username}</div>}
          />
        }

        <Field type="text" name="age" placeholder='Tu edad'/>
        {touched.age &&
          <ErrorMessage name='age'
            component={()=> <div style={{color:"red"}}>{errors.age}</div>}
          />
        }
        
        
        <button type="submit">Submit</button>
      </Form>
    )
    }
    </Formik>
   </div>
);

export default YupAndFormik;
