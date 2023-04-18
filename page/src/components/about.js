import Grid from "@mui/material/Grid";

function About() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        xs={10}
        fontSize={"16px"}
        lineHeight={"1.5"}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <h2 style={{marginTop:"18px"}}>Del trading al desarollo web...</h2>
      </Grid>
      <Grid
        item
        xs={10} sm={5} md={5}
        fontSize={"16px"}
        lineHeight={"1.5"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"24px 24px"}
        textAlign={"center"}
      >
        <h3>Inicios </h3>
        <p>
        <br/>Mi interés en la programación surgió de la necesidad de hacer mejores análisis para el trading. En ese momento, las herramientas que tenía a mi disposición no eran suficientes para llevar a cabo las tareas que necesitaba, por lo que decidí explorar los lenguajes de programación Python y MQL5. Gracias a esto logré la implementación de algoritmos de trading y simulaciones para mejorar mis estrategias de inversión.
        </p>
      </Grid>
      <Grid
        item
        xs={10} sm={5} md={5}
        fontSize={"16px"}
        lineHeight={"1.5"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"24px 24px"}
        textAlign={"center"}
      >
        <h3>Desarrollo web </h3>
        <p>
        <br/>Con el tiempo, el desarrollo web llamó mi atención, lo que me llevó a aprender JavaScript y explorar otras tecnologías y frameworks, como ReactJS, con la cual he desarrollado la mayor parte de esta web, esto me ha permitido fortalecer mi experiencia y aumentar mi conocimiento en esta área.
        </p>
      </Grid>
      <Grid
        item
        xs={10}
        fontSize={"16px"}
        lineHeight={"1.5"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"24px 24px"}
        textAlign={"center"}
      >
        <h3>A futuro </h3>
        <p>
        <br/>Mi objetivo es continuar explorando nuevas tecnologías y herramientas para enriquecer mi conocimiento, experiencia y seguir dando vida a mis ideas y proyectos.
        </p>
      </Grid>
    </Grid>
  );
}
export default About;



// <br/> <br/>
// Desarrollo web <br/>
// Con el tiempo, el desarrollo web llamó mi atención, lo que me llevó a aprender JavaScript y explorar otras tecnologías y frameworks, como ReactJS, con la cual he desarrollado la mayor parte de esta web, esto me ha permitido fortalecer mi experiencia y aumentar mi conocimiento en esta área.

// <br/> <br/>
// A futuro <br/>
// Mi objetivo es continuar explorando nuevas tecnologías y herramientas para enriquecer mi conocimiento, experiencia y seguir desarrollándome como programador, desarrollador web y seguir dando vida a mis ideas y proyectos.

