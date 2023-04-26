import { useRef} from 'react';


export function DoomRef (){
    
    // se declara la referencia
    // la cual deve ser enlazada con la propiedad ref
    const inputRef = useRef(); 

    // esto imprime el .current que es un objeto
    // con todas las propiedades del elemento elazado
    const handleClick = () =>{console.log(inputRef)}
    
    // por ejemplo se puede acceder a .current.style 
    const handleCurrent = () =>{console.log(inputRef.current.textContent)}
    return(
        <div>
            <p type="text" ref={inputRef}>ESTOY AQUÍ</p>
            <button onClick={() => handleClick()}>print current</button>
            <button onClick={() => handleCurrent()}>print .current.textContent</button>
        </div>
    );

}
