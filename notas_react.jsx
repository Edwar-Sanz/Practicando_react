//ejemplo de condicionales:

export default function Profile() { //el componente es como una funcion

  //se definen las variables igual que en js
  let condicion = false;
  let content;

  //la variable content retorna un pedazo de html dependiendo de la condicion
  if (condicion) {
    content = <h1> si </h1>;
  } else {
    content = <h1> no </h1>;
  }

  return (  //acá retorna lo que se va a mostrar
    <div>
      {content}
    </div>
  );
}

//-----------------------------------------------------------
//ejemplo de map:

const products = [ //una lista igual que en js
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(elemento => //el map recorre cada elemento de la lista productos
//por cada elemento creará una etiqueta <li> y el contenido de esa etiqueta será la key title de cada elemento de la lista
<li key={elemento.id}> 
    {elemento.title}  
</li>
);

export default function Profile() { 
  return (
    <div>
      <ul>{listItems}</ul>  {/*la variable listItems tiene guardadas todas las <li> creadas con el .map*/}
    </div>
  );
}

//--------------------------------------------------------------

//ejemplo manejador:

function handleClick() {    //el manejador es una funcion que puede por ejemplo actualizar un estado
  alert('You clicked me!');
}

function MyButton() {
  return (
    //el manejador se puede pasar como prop para ejecutar la funcion desde el hijo
    <button onClick={handleClick}> 
      Click me
    </button>
  );
}

export default function Profile() {
   
  return (
    <div>
      <MyButton/>
    </div>
  );
}

//--------------------------------------------------------------

//ejemplo de estado:  cada componente tiene su  propio estado 


import { useState } from 'react'; 

function MyButton() {
  const [count, setCount] = useState(0); //define la variable count
  
  function handleClick() {    //esta funcion cambia el estado actualizando count
    setCount(count + 1);      //setCount le suma 1 cada vez que se llama 
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function Profile() {
   
  return (
    <div>
      <MyButton />
	    <MyButton />
    </div>
  );
}


//---------------------------------------------------------

//mismo ejemplo con estado compartido:

import { useState } from 'react'; 

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function Profile() {
  //en este caso comparten el mismo estado porque no se creo dentro del componente
  const [count, setCount] = useState(0);  //el estado es el mismo que es el que se pasa como prop

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}


//----------------------------------------------------------------------------------------

//los eventos de propagan a los padres
//si se da click en alguno de los botones también se ejecuta el click del div padre
// para evita eso se debe  usar e.stopPropagation();

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {alert('¡Cliqueaste el Toolbar!');}}> 

      <button onClick={
        () => alert('¡Reproduciendo!')} >
        Reproducir película
      </button>
      <button onClick={
        () => alert('¡Subiendo!')} >
        Subir imagen
      </button>

    </div>);
}

//-----------------------------------------------------
//ejemplo de boton que no propaga el evento al padre

function Button({ funcionDelBoton, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      funcionDelBoton();
    }}>
      {children}
    </button>
  );
}
//------------------------------------------------------
// e.preventDefault(); evita el comportamiento por defecto del elemento form
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('¡Enviando!');
    }}>
      <input />
      <button>Enviar</button>
    </form>
  );
}

//------------------------------------------------------------

// ejemplo de  función de actualización
// se usa para acumular actualizaciones de los estados antes del renderizado

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); //setNumber(number + 1)
        setNumber(n => n + 1);  // number + 1 se cambia por la funcion de actualizacion n => n + 1
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
//------------------------------------------------------------
// modificar arrays
//añadir	    concat, 
//            [...arr] operador de propagación 
//eliminar	  filter, 
//            slice 
//reemplazar	map 
//ordenar	    copia el array primero reverse, sort	


//------------------------------------------------------------
//    Contador
//------------------------------------------------------------
import React, { useReducer } from 'react';

function Counter() {
  // Definimos el estado inicial del contador
  const estadoInicial = { count: 0 };

  // Definimos la función reductora que actualiza el estado en respuesta a una acción
  function reducerLaQueActualiza(estadoActualEnElContextoDelComponente, loQueLlegadeDispatch) {
    switch (loQueLlegadeDispatch.type) {
      case 'increment':
        return { count: estadoActualEnElContextoDelComponente.count + 1 };
      case 'decrement':
        return { count: estadoActualEnElContextoDelComponente.count - 1 };
      default:
        throw new Error();
    }
  }

  // useReducer solo inicializa el estado state y la funcion dispatch
  // state = estadoInicial = { count: 0 }
  //dispatch se usa para ejecutar la funcion reducer
  //
  const [estadoActualEnElContextoDelComponente, dispatch] = useReducer(reducerLaQueActualiza, estadoInicial);


  //cuando se hace click envia el objeto a travez de dispatch la funcion reducer que actualiza
  function leMandaIncrementALaQueActualizaConDispatch() {
    dispatch({ type: 'increment' });
  }
  function leMandaDecrementALaQueActualizaConDispatch() {
    dispatch({ type: 'decrement' });
  }

  

  // Renderizamos el contador y los botones para incrementar y decrementar
  return (
    <div>
      <p>Count: {estadoActualEnElContextoDelComponente.count}</p>
      <button onClick={() => leMandaIncrementALaQueActualizaConDispatch()}>Increment</button>
      <button onClick={() => leMandaDecrementALaQueActualizaConDispatch()}>Decrement</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

//------------------------------------------------------------










