import { useHandleValue} from "./globalState";
//import { useValueContext } from "./globalState";


export function HijoHijo (){

    // se crea una variable con el contexto global
    const handleValue = useHandleValue();
    // si se necesitara se podria acceder al valor global así: 
    //const value = useValueContext();

    return(
        <button onClick={handleValue} >modificar desde el hijo del hijo</button>
    );
}