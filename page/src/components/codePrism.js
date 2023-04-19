import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Prism from "prismjs";
import "../styles/prism.css";

function Cprism({code, titulo, parrafo1, parrafo2}) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const gridItemProp = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
  };

  const stiles = {
    textAlign: "justify",
    backgroundColor: "#fff",
    padding: "12px 12px",
    margin: "8px",
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        sx={gridItemProp}
        xs={10}
        sm={10}
        md={5}
        display={"flex"}
        justifyContent={"center"}
      >
        <pre>
          <code className="language-javascript">
            {code
            }
          </code>
        </pre>
      </Grid>
      <Grid item sx={gridItemProp} xs={10} sm={10} md={5}>
        <div>
          <h4 style={stiles}> {titulo} </h4>
          <p style={stiles}> {parrafo1} </p>
          <p style={stiles}> {parrafo2} </p>
        </div>
      </Grid>
    </Grid>
  );
}
export default Cprism;
