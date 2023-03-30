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
        }, 40);

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
                return {...ballState, "top": ballState.top + 23,"left": ballState.left + 23,"estado": 0}
            case 1:  
                return {...ballState, "top": ballState.top - 23,"left": ballState.left + 23,"estado": 1}
            case 2:  
                return {...ballState, "top": ballState.top + 23,"left": ballState.left - 23,"estado": 2}
            case 3:  
                return {...ballState, "top": ballState.top - 23,"left": ballState.left - 23,"estado": 3}
            default:
                return {...ballState, "top": ballState.top + 23,"left": ballState.left + 23,"estado": 0}
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
        else if (top+25  >= refH && est === 2) {dispatch({"estado": 3})}
        else if (top     <= 5    && est === 3) {dispatch({"estado": 2})}
        else if (top     <= 5    && est === 1) {dispatch({"estado": 0})}
        else if (left+25 >= refW && est === 0 && (top + 25 < player2top || top > player2top + 100)) {setP1score(p1score + 1); dispatch({"estado": 2})} //point to p1
        else if (left+25 >= refW && est === 1 && (top + 25 < player2top || top > player2top + 100)) {setP1score(p1score + 1); dispatch({"estado": 3})} //point to p1 
        else if (left+65 >= refW && est === 0 && ((top > player2top && top < player2top + 100) || (top+25 > player2top && top+25 < player2top + 100))) {dispatch({"estado": 2})} 
        else if (left+65 >= refW && est === 1 && ((top > player2top && top < player2top + 100) || (top+25 > player2top && top+25 < player2top + 100))) {dispatch({"estado": 3})}  
        
        else if (left    <= 5    && est === 3 && (top + 25 < player1top || top > player1top + 100)) {setP2score(p2score + 1); dispatch({"estado": 1})} //point to p2
        else if (left    <= 5    && est === 2 && (top + 25 < player1top || top > player1top + 100)) {setP2score(p2score + 1); dispatch({"estado": 0})} //point to p2
        else if (left    <= 25    && est === 3 && ((top > player1top && top < player1top + 100) || (top+25 > player1top && top+25 < player1top + 100))) {dispatch({"estado": 1})}
        else if (left    <= 25    && est === 2 && ((top > player1top && top < player1top + 100) || (top+25 > player1top && top+25 < player1top + 100))) {dispatch({"estado": 0})} 
        else{dispatch({"estado": est})}
    }

    useEffect(() => {
        const timerBall = setTimeout(()=>mover(ballState), 40);
        return () => {clearTimeout(timerBall);};
    });

//-----------------puntajes--------------------------------
    const [p1score, setP1score] = useState(0);
    const [p2score, setP2score] = useState(0);



//---------------------------------------------------
    return (
        <>
            
            <div className="table" id="table" ref={tableRef}>
                <div className="line"></div>
                <Ball top={ballState.top} left={ballState.left} />
                <Player top={player1top} left={5} />
                <Player top={player2top} left={player2Left} />
            </div>

            <div className="puntaje1"> PUNTAJE JUGADOR 1: {p1score}</div>
            <div className="puntaje2"> PUNTAJE JUGADOR 2: {p2score}</div>
            
        </>
    );
}
export default Table;

