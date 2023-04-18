import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Tooltip } from "@mui/material";

function Contact() {
  return (
    <Grid container justifyContent={"center"}>
      {/* -------------------email------------------------- */}
      <Grid
        item
        xs={10}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"start"}
      >
        <h1 style={{ margin: "30px" }}>
          <Tooltip arrow title="Clic para copiar" placement="right" followCursor>
            <Button  onClick={() => {navigator.clipboard.writeText("ssanzjhon5@gmail.com")}}>
              <EmailIcon sx={{ fontSize: 60, color:"#16a085" }} /> <p style={{fontSize:"30px", textTransform:"capitalize", color:"#2c3e50"}}> &nbsp; Correo electrónico  </p>
            </Button>
          </Tooltip>
        </h1>
      </Grid>
      {/* -------------------LinkedIn------------------------- */}
      <Grid
        item
        xs={10}
        backgroundColor={"#fff"}
        padding={"0px 24px"}
        textAlign={"start"}
      >
        <h1 style={{ margin: "30px"}}>
         
          <Tooltip arrow title="Ir a LinkedIn" placement="right" followCursor>
            <Button
              fontSize="100px"
              underline="none"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/edwarsanz/"
            >
              <LinkedInIcon sx={{ fontSize: 60, color:"#16a085" }}  /> <p style={{fontSize:"30px", textTransform:"capitalize" , color:"#2c3e50"}}> &nbsp; LinkedIn </p>
            </Button>
          </Tooltip>
        </h1>
      </Grid>
      {/* -------------------------------------------- */}
    </Grid>
  );
}
export default Contact;
