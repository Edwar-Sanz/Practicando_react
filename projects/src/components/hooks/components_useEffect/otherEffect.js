import { useState } from 'react';
import { useEffect } from 'react';


//-----------------------otro ejemplo de useEffect ---------------------
export const OtherEffect = () => {
    const [keys, setKeys] = useState([]); //estado inicial una lista vacía
  
    useEffect(() => {
      //función que maneja el evento keypress
      function handleKey(event) { setKeys([...keys, event.key]);}
  
      // se crea el evento
      window.addEventListener('keypress', handleKey);
  
      // es necesario borrar el evento para que no se acumulen eventos infinitos
      return function cleanUp() {window.removeEventListener('keypress', handleKey);}
    })
  
    return <div >
        <h2>Presiona una tecla</h2>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {keys.map((key, index) => (
                <span key={key+ index}>{key}</span>
            ))}
        </div>
    </div>
  }