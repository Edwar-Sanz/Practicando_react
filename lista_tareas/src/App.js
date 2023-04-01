import './styles/App.css';
import list from "./components/data.js";
import CardMap from "./components/cardMap.js"
import Template from './components/template';
import { useState} from "react";


function App() {
    
    const [DataList, setDataList] = useState(list);

    const funtAdd = (value_titulo, value_text)=> { // si no estan vacios
        if (value_titulo !== "" && value_text !== ""){ 
            setDataList([...DataList, { "title" :value_titulo, "msj": value_text}]) //agrega lo nuevo
        };      
    };      
    const FunBorrarElemento = (indice) => { //deja pasar todos los diferente a indice
        setDataList(DataList.filter((element, index) => index !== indice));
    };

    return (
    <div className="App">

        <Template propFunAdd={funtAdd}/>

        <CardMap 
            propDataList={DataList}
            FunBorrarElemento={FunBorrarElemento}
        />

    </div>
    );
}

export default App;
