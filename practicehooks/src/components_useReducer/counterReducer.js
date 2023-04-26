import React, { useReducer } from 'react';

//---------------------------useReducer-----------------------------------------------
export function Counter() {

    // Definimos el estado inicial del contador
    const estadoInicial = { count: 0 };
  
  //--------------------------------------------------------------------------
    // useReducer inicializa el estado y la funcion dispatch
    // currentState = estadoInicial = { count: 0 } o sea empieza en 0
    //dispatch envia un objeto a reducer para que aplique el caso
    const [currentState, dispatch] = useReducer(reducer, estadoInicial);
  
  //--------------------------------------------------------------------------  
    //cuando se hace click envia el objeto a travez de dispatch
    // hasta la funcion reducer
    function handleIncrement() {dispatch({ action: 'increment' });}
    function handleDecrement() {dispatch({ action: 'decrement' });}
    function handleReset() {dispatch({ action: 'reset' });}
  
  //--------------------------------------------------------------------------  
    // Definimos la función reductora que actualiza el estado en respuesta a una acción
    function reducer(currentState, actionDispatch) {
      switch (actionDispatch.action) {
        case 'increment':
          return { count: currentState.count + 1 };
        case 'decrement':
          return { count: currentState.count - 1 };
        case 'reset':
          return { count: 0 };
        default:
          throw new Error();
      }
    }
//--------------------------------------------------------------------------  
  // Renderizamos el contador y los botones para incrementar y decrementar
  return (
    <div>
      <h2>useReducer</h2>
      <h1>Count: {currentState.count}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => handleReset()}>reset</button>
    </div>
  );
}  