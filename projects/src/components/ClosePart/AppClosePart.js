import * as React from 'react';
import Grid from "@mui/material/Grid";
import {Formik} from "formik"

function Formulario() {
  return (
    <>
    {
      ()=>(
        <div className=''>
        <h5>operation info  </h5>
        <form>

        </form>
        </div>
      )
    }
    </>
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
          <Formik>
            <Formulario/>
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}

export default AppClose;
