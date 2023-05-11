import './AppBateria.css';
import { useEffect } from 'react';

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


    // se crea el evento
    window.addEventListener('keypress', handleKey);
    // es necesario borrar el evento para que no se acumulen eventos infinitos
    return function cleanEvent() {window.removeEventListener('keypress', handleKey);}
  })

  return (
    <div id="AppBateria">
      <img id="bateriaimg" src={require("./media/bateria.jpg")} alt='bateria' />
      <div id="bass"      onClick={()=> bass.play()     } ><div className="txtdiv">g     </div></div>
      <div id="floortom"  onClick={()=> floortom.play() } ><div className="txtdiv">o </div></div>
      <div id="hihat"     onClick={()=> hihat.play()    } ><div className="txtdiv">j    </div></div>
      <div id="mediumtom" onClick={()=> mediumtom.play()} ><div className="txtdiv">i</div></div>
      <div id="smalltom"  onClick={()=> smalltom.play() } ><div className="txtdiv">r </div></div>
      <div id="snare"     onClick={()=> snare.play()    } ><div className="txtdiv">e    </div></div>
      <div id="splash"    onClick={()=> splash.play()   } ><div className="txtdiv">t   </div></div>
    </div>
  );
}

export default AppBateria;
