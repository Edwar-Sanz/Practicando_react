import Grid from "@mui/material/Grid";

function About() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        xs={10}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <h1>Saludos</h1>
      </Grid>
      <Grid
        item
        xs={10}
        fontSize={"18px"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"24px 24px"}
        textAlign={"center"}
      >
        <p>

        Mi interés en la programación surgió de la necesidad de hacer mejores análisis para el trading. En ese momento, las herramientas que tenía a mi disposición no eran suficientes para llevar a cabo las tareas que necesitaba, por lo que decidí aprender los lenguajes de programación Python y MQL5.

        Con el tiempo, el desarrollo web llamó mi atención, lo que me llevó a aprender JavaScript y explorar otras tecnologías y frameworks, como ReactJS, con la cual me encuentro desarrollando actualmente.

        He aplicado mis habilidades para desarrollar proyectos relacionados con el trading y la web, desde la implementación de algoritmos de trading hasta la creación de aplicaciones web, lo que ha permitido fortalecer mi experiencia y aumentar mi conocimiento en estas áreas.   Mi objetivo es continuar explorando nuevas tecnologías y herramientas para enriquecer mi conocimiento, experiencia y seguir desarrollándome como programador y desarrollador web, y seguir dando vida a mis ideas y proyectos.


        </p>
      </Grid>
    </Grid>
  );
}
export default About;
