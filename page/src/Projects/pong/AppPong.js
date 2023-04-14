import Table from "./components/table.js";
import Grid from "@mui/material/Grid";

function AppPong() {
  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    xs: 10,
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp}>
        <div className="App">
          <Table />
        </div>
      </Grid>
      <Grid item sx={gridItemProp}>
        <div>
          flecha arriba y abajo para mover
        </div>
      </Grid>
    </Grid>
  );
}

export default AppPong;
