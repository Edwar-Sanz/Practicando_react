import Grid from "@mui/material/Grid";
import { Card, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";


function CardBase({link, target, title, description}){
  const [shadow, setShadow] = useState({"boxShadow": "none"})
  return(
  <div onMouseEnter={()=>setShadow({"boxShadow": "rgba(0, 0, 0, 0.75) 0px 0px 15px 0px"})}  onMouseLeave={()=>setShadow({"boxShadow": "none"})} style={shadow}>
    <Link underline="none"  target={target} rel="noreferrer" href={link} >
      <Card sx={{ maxWidth:345, height: "100%", '&:hover': {backgroundColor: 'whitesmoke'}}}>
        <CardContent sx={{'&:hover': {backgroundColor: 'whitesmoke'}}}>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </div>
  );
}

function Home() {
  const gridItemProp = {
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"gainsboro",
    padding:"24px 24px",
    //'&:hover': {backgroundColor: 'whitesmoke'}
  }
 
  return (
    
    <Grid container justifyContent={"center"} gap={2} >
      {/* --------pong---------------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/pong"}
          target={"_self"}
          title={"Pong Game"}
          description={"Una versión del clásico juego de Pong creado en react JS."}
        /> 
      </Grid>
      {/* ---------chat---------------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/chat"}
          target={"_self"}
          title={"Chatbot Personal"}
          description={"Chatbot que usa la API de OpenAI para generar respuestas personalizadas a partir de un mensaje dado."}
        />
      </Grid>
      {/* ---------lista de tareas----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/notes"}
          target={"_self"}
          title={"Notes App"}
          description={"Una aplicación que permite crear, editar y eliminar notas."}
        />
      </Grid>
      {/* ---------Close Part----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/part"}
          target={"_self"}
          title={"Close Part"}
          description={"Cerrar parte de una operacion"}
        />
      </Grid>
      
      {/* ---------drums----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/drums"}
          target={"_self"}
          title={"Drums"}
          description={"Un batería musical que permite experimentar hasta siete sonidos diferentes."}
        />
      </Grid>
      {/* --------edad----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1} >
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/age"}
          target={"_self"}
          title={"Calcular Edad"}
          description={"Una aplicación que permite calcular la edad de forma precisa."}
        />
      </Grid>
      {/* ---------triki----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1}>
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/triki"}
          target={"_self"}
          title={"Tres en línea"}
          description={"Una versión del clásico juego de Tres en línea creado en react JS."}
        />
      </Grid>
      {/* --------calculator----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1} >
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/calculator"}
          target={"_self"}
          title={"Calculator"}
          description={"Una calculadora que permite hacer todas las operaciones básicas."}
        />
      </Grid>
      {/* --------hooks----------- */}
      <Grid item sx={gridItemProp} xs={10} sm={5.2} md={3.1} lg={3.1} >
        <CardBase
          gridItemProp={gridItemProp}
          link={"/portfolio/hooks"}
          target={"_self"}
          title={"Practice Hooks"}
          description={"Notas y practicas de los hooks."}
        />
      </Grid>
      {/* ------------------- */}
    </Grid>
    
  );
}
export default Home;
