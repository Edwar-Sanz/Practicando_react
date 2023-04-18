import Grid from "@mui/material/Grid";
import ActionAreaCard from "./cards.js"
import { Card, CardMedia, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

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
          description={"Chatbot que usa la API de OpenAI para generar respuestas personalizadas a partir de un mensaje dado."}
        />
      </Grid>
      {/* ---------pagina trading---------------- */}
      <Grid item sx={gridItemProp}>
        <Link underline="none"  target="_blank" rel="noreferrer" href="https://trading.edwarsanz.com/">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={require("../images/trading.png")}
            title="Web Trading"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Trading
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Web creada para hacer seguimiento a productos financieros de mi interés, tiene una sección de noticias y otra de análisis de ciclos.
            </Typography>
          </CardContent>
        </Card>
        </Link>
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
      <Grid item sx={gridItemProp}>
        <ActionAreaCard
          to={"/portfolio/triki"}
          height={200}
          image={require("../images/triki.png")}
          title={"triki"}
          description={"triki"}
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
      {/* --------triki----------- */}
    </Grid>
  );
}
export default Portfolio;
