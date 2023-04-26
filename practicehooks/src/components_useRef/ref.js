import { useRef, useState } from 'react';


export function CounterRef (){
    
    const contador = useRef(0); // el valor perciste entre cada render

    //la propiedad .current permite acceder al valor o propiedades de un elemento
    const handleClick = (incrementa) => {
        if (incrementa) { contador.current ++; } 
        else { contador.current --; }
        console.log(`From useRef, Contador: ${contador.current}`);
    }

    console.log("From useRef: Was Render!"); //imprime en cosola cada vez que renderiza

    // el useRef no actualiza la vista por lo que hay que usar useSTate
    const [currentValue, setCurrentValue] = useState(0);
    const handleRefresh = () => { setCurrentValue(contador.current); }

    return(
        <div>
            <h1> Count: {currentValue}</h1>
            <button onClick={() => handleClick(true)}>sumar</button>
            <button onClick={() => handleClick(false)}>restar</button>
            <button onClick={() => handleRefresh()}>actualizar valor</button>
        </div>
    );

}
