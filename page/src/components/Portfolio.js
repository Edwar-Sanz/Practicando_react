import Grid from "@mui/material/Grid";
import ActionAreaCard from "./cards.js"
import { Card, CardMedia, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function Portfolio() {

  const gridItemProp = {
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"#fff",
    padding:"24px 24px",
    
    
  }
 
  //sx = { xs:11 sm:6 md:4 lg:4 }
  return (
    
    <Grid container justifyContent={"center"} >
      {/* --------pong---------------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <ActionAreaCard
          height={"170"}
          to={"/portfolio/pong"}
          image={require("../images/pong.png")}
          title={"Pong Game"}
          description={"Una versión del clásico juego de Pong creado en react JS"}
        />
      </Grid>
      {/* ---------chat---------------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <ActionAreaCard
          height={"170"}
          to={"/portfolio/chat"}
          image={require("../images/chat.png")}
          title={"Chatbot Personal"}
          description={"Chatbot que usa la API de OpenAI para generar respuestas personalizadas a partir de un mensaje dado."}
        />
      </Grid>
      {/* ---------pagina trading---------------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <Link underline="none"  target="_blank" rel="noreferrer" href="https://trading.edwarsanz.com/">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 170 }}
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
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <ActionAreaCard
          height={"170"}
          to={"/portfolio/notes"}
          image={require("../images/cards.png")}
          title={"Notes App"}
          description={"Una aplicación que permite crear, editar y eliminar notas"}
        />
      </Grid>
      
      {/* ---------triki----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <ActionAreaCard
          height={"170"}
          to={"/portfolio/triki"}
          image={require("../images/triki.png")}
          title={"Tres en línea"}
          description={"Una versión del clásico juego de Tres en línea creado en react JS"}
        />
      </Grid>
      {/* --------calculator----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1} >
        
        <ActionAreaCard
          height={"170"}
          to={"/portfolio/calculator"}
          image={require("../images/calculator.png")}
          title={"Calculator"}
          description={"Una calculadora que permite hacer todas las operaciones básicas."}
        />
      </Grid>
      {/* ------------------- */}
    </Grid>
    
  );
}
export default Portfolio;
