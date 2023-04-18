
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item
        xs={10}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <h1 style={{marginTop: "100px", fontSize: "48px"}}>

          Bienvenido, Soy Edwar.
          
        </h1>
      </Grid>
      <Grid item
        xs={10}
        fontSize={"18px"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <br/>
        <h2 style={{marginBottom: "100px"}}> Apasionado de la tecnología y las inversiones. </h2>
      </Grid>
    </Grid>
  );
}
export default Home;
