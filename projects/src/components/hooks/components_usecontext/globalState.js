import React, { useState, useContext, createContext } from "react";

// inicializando contexts
const valueContext = createContext();
const handleValue = createContext();

// funciones -hoocks- que retornan el contexto actual
export function useValueContext() { return useContext(valueContext); }
export function useHandleValue() {return useContext(handleValue);}

// componente que pasará el valór  a todos los componentes hijos
export function GlobalValue({children}) {
    
    // valor al que van a acceder todos los componentes
    const [valor, setValor] = useState(0);

    // función para modificar el valor
    const sumValor = () => {setValor(valor + 1);}

    // al children tiene acceso a los contextos
    //todo necesite esos contextos debe ser children de 
    //<GlobalValue> {children} </GlobalValue>
    return (
        <valueContext.Provider value={valor}> 
            <handleValue.Provider value={sumValor}>
                {children}
            </handleValue.Provider>
        </valueContext.Provider>
    );
}