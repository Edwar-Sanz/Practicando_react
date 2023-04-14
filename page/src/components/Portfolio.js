import Grid from "@mui/material/Grid";
import ActionAreaCard from "./cards.js"



function Portfolio() {

  const gridItemProp = {
    textAlign:"center",
    backgroundColor:"#fff",
    padding:"24px 24px",
    xs:10
    
  }

  return (
    <Grid container justifyContent={"center"} >
      <Grid item sx={gridItemProp}>
      {/* --------pong---------------- */}
        <ActionAreaCard
          to={"/portfolio/pong"}
          height={200}
          image={require("../images/pong.png")}
          title={"Pong"}
          description={"Una versión del clásico juego de Pong creado en react JS"}
        />
      </Grid>
      {/* ---------chat---------------- */}
      <Grid item sx={gridItemProp}>
        <ActionAreaCard
          to={"/portfolio/chat"}
          height={200}
          image={require("../images/chat.png")}
          title={"Chat"}
          description={"Chat con inteligencia artificial"}
        />
      </Grid>
      {/* ---------lista de tareas----------- */}
      <Grid item sx={gridItemProp}>
        <ActionAreaCard
          to={"/portfolio/notes"}
          height={200}
          image={require("../images/cards.png")}
          title={"Notes App"}
          description={"Una aplicación que permite crear, editar y eliminar notas"}
        />
      </Grid>
      {/* --------calculator----------- */}
      <Grid item sx={gridItemProp}>
        <ActionAreaCard
          to={"/portfolio/calculator"}
          height={200}
          image={require("../images/calculator.png")}
          title={"Calculator"}
          description={"Una calculadora"}
        />
      </Grid>
    </Grid>
  );
}
export default Portfolio;
