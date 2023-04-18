import Table from "./components/table.js";
import Grid from "@mui/material/Grid";

function AppPong() {
  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };
  const stiles = {
    textAlign: "justify",
    backgroundColor: "#fff",
    padding: "12px 12px",
    margin: "8px"
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={10} sm={10}  md={5}>
        <div className="App">
          <Table />
        </div>
      </Grid>
      <Grid item sx={gridItemProp} xs={10} sm={10}  md={5}>
        <h4 style={stiles}> Juego del Pong </h4>
        <p style={stiles}>Este proyecto trata de crear un juego basado en el clásico juego de pong, donde se puedan usar las flechas del teclado para mover el primer jugador, el segundo jugador, se mueve automáticamente, el juego continúa indefinidamente sumando puntos, en el tablero. </p>
        <p style={stiles}>Durante este proyecto  he mejorado mi comprensión del manejo de los hooks de React, así como de la interacción entre los diferentes componentes y su respuesta a los eventos y actualizaciones del estado.</p>
        <p style={stiles}>Uno de los retos más interesantes del proyecto fue la implementación del movimiento de la pelota y su interacción con los diferentes componentes. Específicamente, cómo cambiaría su estado al tocar un jugador o la mesa de juego.</p>
      </Grid>
    </Grid>
  );
}

export default AppPong;
