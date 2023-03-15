import './styles/App.css';
import Boton from './components/button';
import { useState } from 'react';

const arr = [...Array(9).keys()];
const objs = arr.map((elemen, indix)=>{
    return elemen = {"valor": null}
    }
);

function App() {
    const [objets, setObjets] = useState(objs);
    let ganador = false;
    const funCambiaCont = (indexBoton)=>{
        const newobj = [...objets];

        let x = 0;
        let o = 0;
        let n = 0;
        for (let i = 0; i < newobj.length; i++) {
            if ( newobj[i].valor === "X") {x +=1}
            if ( newobj[i].valor === "O") {o +=1}
            if ( newobj[i].valor === null) {n +=1}  
        }
        if(x === o && newobj[indexBoton].valor === null){newobj[indexBoton].valor = "X";}else
        if(x > o && newobj[indexBoton].valor === null){newobj[indexBoton].valor = "O";}
        setObjets(newobj);
        calcularVictoria(newobj, "X", ganador);
        calcularVictoria(newobj, "O", ganador);
        
        if(n === 1 && ganador === false){
            alert("Empante");
            objets.map((item, indx)=> item.valor = null );
        }
    };

    const calcularVictoria = (ob, caracter)=>{
        if( ((ob[0].valor === caracter && ob[1].valor === caracter && ob[2].valor === caracter)||
            (ob[3].valor === caracter && ob[4].valor === caracter && ob[5].valor === caracter) ||
            (ob[6].valor === caracter && ob[7].valor === caracter && ob[8].valor === caracter) ||
            
            (ob[0].valor === caracter && ob[3].valor === caracter && ob[6].valor === caracter) ||
            (ob[1].valor === caracter && ob[4].valor === caracter && ob[7].valor === caracter) ||
            (ob[2].valor === caracter && ob[5].valor === caracter && ob[8].valor === caracter) ||
    
            (ob[0].valor === caracter && ob[4].valor === caracter && ob[8].valor === caracter) ||
            (ob[2].valor === caracter && ob[4].valor === caracter && ob[6].valor === caracter))
        ) 
        {
            alert("Gana " + caracter);
            ganador = true;
            ob.map((item, indx)=> item.valor = null );
        };    
    };
    return (
        <div className="App">           
            {
                objets.map( (element, index)=>{
                    return <Boton
                    key={index}
                    indice={index}
                    valorBoton={element.valor}
                    funCambiaCont={funCambiaCont}
                    />
                    }
                )
            }
        </div>
    );
}

export default App;
