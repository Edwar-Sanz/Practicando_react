import { Hijo } from "./hijo";
import { useValueContext } from "./globalState";

//---------------------------useContext-----------------------------------------------

// este componenete debe ser hijo de <GlobalValue>
// para que pueda acceder a los contextos 
export function CounterWithContext(){
  
    // se crea una variable con el contexto global
    const value = useValueContext();
    
    // renderiza los componentes
    return(
      <div>
        <h2>useContext</h2>
        <h1>{`Valor global: ${value}`}</h1>
        <Hijo/>
      </div>
    );
  }