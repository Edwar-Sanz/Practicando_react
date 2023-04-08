
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item
        xs={9}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <h1>Saludos home</h1>
      </Grid>
      <Grid item
        xs={9}
        fontSize={"18px"}
        fontWeight={"normal"}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"center"}
      >
        <p>asdasdsad</p>
      </Grid>
    </Grid>
  );
}
export default Home;
