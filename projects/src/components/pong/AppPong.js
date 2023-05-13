import Table from "./components/table.js";
import Grid from "@mui/material/Grid";

function AppPong() {
  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={10} sm={10}  md={5}>
        <div className="App">
          <Table />
        </div>
      </Grid>
    </Grid>
  );
}

export default AppPong;
