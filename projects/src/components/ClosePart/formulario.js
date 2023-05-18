import { Formik} from "formik";
import { Button, TextField, Grid} from "@mui/material";

function Formulario({validationSchema, setMaxUni, handleForm}) {
  return (
    
      <Grid item xs={12} sm={3} md={4} lg={4}>
        <Formik
          initialValues={ 
            { precioEntrada: "", unidadesActuales: "",
              precioActual:"", venderUnidades:""
            }
          }
          validationSchema={validationSchema}
          onSubmit={(values) => {handleForm(values);}}
        >
        {
        ({errors, touched,handleSubmit, values, handleChange, handleBlur}) => (
          <form onSubmit={handleSubmit} style={{width:"100%", height:"370px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
            <TextField
              fullWidth
              placeholder="Precio Entrada"
              name="precioEntrada"
              label="Precio Entrada"
              value={values.precioEntrada}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.precioEntrada && Boolean(errors.precioEntrada)}
              helperText={touched.precioEntrada && Boolean(errors.precioEntrada) && errors.precioEntrada}
            />
            <TextField
              fullWidth
              placeholder="Unidades Actuales"
              name="unidadesActuales"
              label="Unidades Actuales"
              value={values.unidadesActuales}
              onChange={(e)=> {handleChange(e); setMaxUni(e.target.value) }}
              onBlur={handleBlur}
              error={touched.unidadesActuales && Boolean(errors.unidadesActuales)}
              helperText={touched.unidadesActuales && Boolean(errors.unidadesActuales) && errors.unidadesActuales}
            />
            <TextField
              fullWidth
              placeholder="Precio Actual"
              name="precioActual"
              label="Precio Actual"
              value={values.precioActual}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.precioActual && Boolean(errors.precioActual)}
              helperText={touched.precioActual && Boolean(errors.precioActual) && errors.precioActual}
            />
            <TextField
              fullWidth
              placeholder="Unidades A Vender"
              name="venderUnidades"
              label="Unidades A Vender"
              value={values.venderUnidades}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.venderUnidades && Boolean(errors.venderUnidades)}
              helperText={touched.venderUnidades && Boolean(errors.venderUnidades) && errors.venderUnidades}
            />
          
            <Button fullWidth color="primary" variant="contained"  type="submit">
              Submit
            </Button>
          </form>
          )
        }
        </Formik>
      </Grid>
    
  );
}

export default Formulario;