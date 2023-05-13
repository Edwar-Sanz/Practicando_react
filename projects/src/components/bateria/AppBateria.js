import './AppBateria.css';
import { useEffect } from 'react';
import Grid from "@mui/material/Grid";

const bass = new Audio(require("./media/bass.mp3"));
const floortom = new Audio(require("./media/floortom.mp3"));
const hihat = new Audio(require("./media/hihat.mp3"));
const mediumtom = new Audio(require("./media/mediumtom.mp3"));
const smalltom = new Audio(require("./media/smalltom.mp3"));
const snare = new Audio(require("./media/snare.mp3"));
const splash = new Audio(require("./media/splash.mp3"));

function AppBateria() {
  useEffect(() => {
    function handleKey(e) { 
      switch (e.key) {
        case "j":
          hihat.play(); break;
        case "i":
          mediumtom.play(); break;
        case "o":
          floortom.play(); break;
        case "g":
          bass.play(); break;
        case "r":
          smalltom.play(); break;
        case "e":
          snare.play(); break;
        case "t":
          splash.play(); break;           
        default:
          console.log(e.key); break;
      }
  }
    window.addEventListener('keypress', handleKey);
    return function cleanEvent() {window.removeEventListener('keypress', handleKey);}
  });

  const gridItemProp = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "24px 24px",
    
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item sx={gridItemProp} xs={ 10} sm={10} md={6} display={"flex"} justifyContent={"center"}>
        <div id="AppBateria">
          <img id="bateriaimg"src={require("./media/bateria.jpg")} alt='bateria' />
          <div id="bass"      onClick={()=> bass.play()     } ><div className="txtdiv">g </div></div>
          <div id="floortom"  onClick={()=> floortom.play() } ><div className="txtdiv">o </div></div>
          <div id="hihat"     onClick={()=> hihat.play()    } ><div className="txtdiv">j </div></div>
          <div id="mediumtom" onClick={()=> mediumtom.play()} ><div className="txtdiv">i </div></div>
          <div id="smalltom"  onClick={()=> smalltom.play() } ><div className="txtdiv">r </div></div>
          <div id="snare"     onClick={()=> snare.play()    } ><div className="txtdiv">e </div></div>
          <div id="splash"    onClick={()=> splash.play()   } ><div className="txtdiv">t </div></div>
        </div>
      </Grid>

    </Grid>
  );
}

export default AppBateria;
