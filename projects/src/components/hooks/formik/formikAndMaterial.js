import React from 'react';
import { Formik} from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const WithMaterialUI = () => {
  
  return (
    <div>
      <Formik
        initialValues={ { email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {console.log(values);}}
      >
      {
      ({errors, touched,handleSubmit, values, handleChange, handleBlur}) => (
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder='foobar@example.com'
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && Boolean(errors.email) && errors.email}
          />
          <TextField
            placeholder='*******'
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && Boolean(errors.password) && errors.password}
          />
          <Button color="primary" variant="contained"  type="submit">
            Submit
          </Button>
        </form>
        )
      }
      </Formik>
    </div>
  );
};

export default WithMaterialUI;