import { useState, useRef, useEffect, useReducer} from 'react';
import "../styles/table.css";
import Player from "./player.js";
import Ball from "./ball.js";

function Table() {
	//se crean referencia al elemento
    const tableRef = useRef(null);


    //se definen los estados
    const [player1top, setPlayer1top] = useState(20);
    const [player2top, setPlayer2top] = useState(300);
    const [player2Left, setPlayer2Left] = useState(0);
    const [move, setmove] = useState(1);
    
    
    // cuando renderise, verifica si ya se puede acceder a elemento
    //elemento === truthy
    useEffect(() => {
    if (tableRef.current) {
        //establece los valores después del renderizado
        setPlayer1top(20);   
        setPlayer2top(300);   
        setPlayer2Left(tableRef.current.offsetWidth - 25);
        
        }
    }, [tableRef]);


//-----------------jugador 2-----------------------
    //cuando renderise, crea un temporizador 
    //para permitir el movimiento del player2
    useEffect(() => {
        const timerId = setTimeout(() => {
            if(move === 0) {        
                setPlayer2top(player2top + 20);
                if (player2top >= tableRef.current.offsetHeight - 140) {setmove(1)};
            }
            if(move === 1) {        
                setPlayer2top(player2top - 20);
                if (player2top <= 20) {setmove(0)};
            }
        }, 700);

        return () => {
        clearTimeout(timerId);
        };
    }, [player2top, move]);


//-----------------jugador 1-----------------------
    //cuando renderise crea un manejador del evento de la tecla
    useEffect(() => {
        const handleKeyPress = (e) => {
            let tecla = e.key.toUpperCase();
            if (tecla === "ARROWDOWN" && player1top < tableRef.current.offsetHeight - 110) { 
            setPlayer1top(player1top + 20) }
            if (tecla === "ARROWUP" && player1top > 10) { 
            setPlayer1top(player1top - 20) }
            
        }
        //se crea el evento
        document.addEventListener("keydown", handleKeyPress); //se llama el manejador
        //se elimina el evento
        return () => document.removeEventListener("keydown", handleKeyPress); 
    }, [player1top]);


//----------------- ball ---------------------------    
    
    const ballInitialState = { "estado":0, "top": 205 , "left": 300};

    function reducerBall(ballState, dispatch) {
        switch (dispatch.estado) {
            case 0:  
                return {...ballState, "top": ballState.top + 20,"left": ballState.left + 20,"estado": 0}
            case 1:  
                return {...ballState, "top": ballState.top - 20,"left": ballState.left + 20,"estado": 1}
            case 2:  
                return {...ballState, "top": ballState.top + 20,"left": ballState.left - 20,"estado": 2}
            case 3:  
                return {...ballState, "top": ballState.top - 20,"left": ballState.left - 20,"estado": 3}
            default:
                return {...ballState, "top": ballState.top + 20,"left": ballState.left + 20,"estado": 0}
        }
        
    }

    const [ballState, dispatch] = useReducer(reducerBall, ballInitialState);
    useEffect(() => {dispatch({"estado": 0});}, []);

    function mover (ballState){
        let refH = tableRef.current.offsetHeight;
        let refW = tableRef.current.offsetWidth;
        let est = ballState.estado;
        let top = ballState.top;
        let left = ballState.left;
        if      (top+25  >= refH && est === 0) {dispatch({"estado": 1})}
        else if (left+25 >= refW && est === 0) {dispatch({"estado": 2})}
        else if (left+25 >= refW && est === 1) {dispatch({"estado": 3})}
        else if (top+25  >= refH && est === 2) {dispatch({"estado": 3})}
        else if (top     <= 5    && est === 3) {dispatch({"estado": 2})}
        else if (top     <= 5    && est === 1) {dispatch({"estado": 0})}
        else if (left    <= 5    && est === 3) {dispatch({"estado": 1})}
        else if (left    <= 5    && est === 2) {dispatch({"estado": 0})}
        else{dispatch({"estado": est})}
    }

    useEffect(() => {
        const timerBall = setTimeout(()=>mover(ballState), 500);
        return () => {clearTimeout(timerBall);};
    }, [ballState]);

//-------------------------------------------------    


//---------------------------------------------------
    return (
        <>
            <div className="table" id="table" ref={tableRef}>
                <Ball top={ballState.top} left={ballState.left} />
                <Player top={player1top} left={5} />
                <Player top={player2top} left={player2Left} />
            </div>
            <button onClick={()=>console.log(player1top, player1top+100)}> clik me </button>
        </>
    );
}
export default Table;

