import React, { useReducer, useRef, useState } from "react";

//---------------------------useReducer-----------------------------------------------
export function Notes() {
  // Definimos el estado inicial
  const estadoInicial = ["Nota 1", "Nota 2", "Nota 3"];
  const inputRef = useRef(); 
  //--------------------------------------------------------------------------
  // useReducer inicializa el estado y la funcion dispatch
  const [currentState, dispatch] = useReducer(reducer, estadoInicial);

  //--------------------------------------------------------------------------
  // Definimos la función reductora que actualiza el estado en respuesta a una acción
  function reducer(currentState, dispatch) { 
    switch (dispatch.action) {
      case "Submit": // copia toda la lista y agrega el nuevo valor al final
        return [...currentState, inputRef.current.value] 
      case "Delete": // retorna todos los elementos menos el del indice indicado
        return currentState.filter((item, index)=> index !== dispatch.index);
      case "Save":  // retorna una nueva lista modificando el elemento indicado
        return currentState.map((element, indice)=>{
            if (dispatch.index === indice) {
              return element = dispatch.newItem
            }else{
              return element
            }
          }
        )
      default:
        throw new Error();
    }
  }
  //--------------------------------------------------------------------------
  //manejadores
  function handleSubmit() {dispatch({ action: "Submit" });}
  function handleDelete(index) {dispatch({ action: "Delete", index: index });}
  function handleSave(index, newItem) {dispatch({ action: "Save", index: index, newItem: newItem });}
  
  //-------------------componente lista----------------------------------------
  const List = ({item, index})=>{
    //estados
    const [noEditable, setEditable] = useState(true);
    const [elemento, setElemento] = useState(item);
    const [check, setCheck] = useState(false);

    const handleCheck = ()=>{ // manejar el check
      return check ? {color: "gray", textDecoration: "line-through"} : {} }

      //renderiza los elementos dependiendo si son editables o no
      return (
      <span>
        <input type="checkbox"  onChange={()=>setCheck(!check)}/>
        {noEditable ?
          <>
            <span style={handleCheck()}>{elemento}</span>
            <button onClick={()=> {setEditable(false)}}> edit  </button>
          </>
          :
          <>
            <input value={elemento}  onChange={(e)=>setElemento(e.target.value)}/>
            <button onClick={(e)=> {setEditable(true); handleSave(index, elemento) }}> aceptar </button>
          </>}
      </span>
    );
  }

  //--------------------------------------------------------------------------
  return (
    <div>
      <form onSubmit={(e)=> {e.preventDefault(); handleSubmit()} }>
        <input type="text"  ref={inputRef} />
        <input type="submit" value="add" />
      </form>
      <ul>
        {currentState && currentState.map((item, index) => { 
          return <li key={item + index}>          
            <List item={item} index={index}/> 
            <button onClick={()=> handleDelete(index)}> delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
