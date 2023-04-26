import { useHandleValue, useValueContext } from "./globalState";
import { HijoHijo } from "./hijoHijo";


export function Hijo (){

    // se crean variables con el contexto global
    const value = useValueContext();
    const handleValue = useHandleValue();

    // se puede acceder a los valores porque son hijos del Provider <GlobalValue>
    return(
        <div>
            <button onClick={handleValue} >modificar desde hijo</button>
            <button onClick={()=>console.log(value)} >imprimir en consola</button>
            <HijoHijo/>
        </div>
    );
}