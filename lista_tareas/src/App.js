import './styles/App.css';
import list from "./components/data.js";
import CardMap from "./components/cardMap.js"
import Template from './components/template';
import { useState} from "react";


function App() {
    //se crea la variable DataList y la funcion setDataList
    // el estado inicial de DataList se establece como list
    const [DataList, setDataList] = useState(list);
    
    // se crea la funcion funtAdd
    // esta funcion tiene dos parámetros, value_titulo y value_text
    const funtAdd = (value_titulo, value_text)=> {
        //La función primero verifica si tanto value_titulo como value_text no están vacíos. 
        if (value_titulo !== "" && value_text !== ""){

            //utilizando el método setDataList y el operador de propagación (...)
            //se actualiza DataList copiando los elementos actuales de la lista DataList 
            //y agregando un nuevo elemento con el título y el texto proporcionados.
            //El operador de propagación "..." se utiliza para crear una nueva matriz que 
            //contiene todos los elementos de la matriz DataList existente, 
            //seguido de un nuevo objeto que se agregará a la lista. De esta forma, 
            //se garantiza que los elementos existentes en la lista se mantengan intactos 
            //y se agregue el nuevo elemento.
            setDataList([...DataList, { "title" :value_titulo, "msj": value_text}])
        };      
    };      

    //  En esta función, comprobamos si el índice actual es igual al índice proporcionado
    //como parámetro, y solo se incluyen en la nueva lista los elementos cuyo índice sea 
    //diferente al proporcionado.
    const FunBorrarElemento = (indice) => {
        setDataList(DataList.filter((element, index) => index !== indice));
    };

    return (
    <div className="App">
        {/* primer componenete  se le pasa una propiedad propFunAdd, 
        que es una referencia a la función funtAdd. Esta propiedad se 
        utiliza para permitir que el componente Template acceda a la función funtAdd*/}
        <Template propFunAdd={funtAdd}/>

        {/* a este componenete se le pasan dps */}
        <CardMap 
            propDataList={DataList}
            FunBorrarElemento={FunBorrarElemento}
        />
       
    </div>
    );
}

export default App;
