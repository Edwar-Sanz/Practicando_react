import { useState, useRef, useEffect, useReducer} from 'react';
import "../styles/table.css";
import Player from "./player.js";
import Ball from "./ball.js";
import Marcador from "./marcador.js";



function Table() {
	//se crean referencia al elemento
    const tableRef = useRef(null);

    //se definen los estados
    const [player1top, setPlayer1top] = useState(20);
    const [player2top, setPlayer2top] = useState(20);
    const [player2Left, setPlayer2Left] = useState(0);
    const [baseWidth, setBaseWidth] = useState(600);
    const [move, setmove] = useState(1);
    
    
    // cuando renderise, verifica si ya se puede acceder a elemento
    //elemento === truthy
    useEffect(() => {
    if (tableRef.current.offsetWidth) {
        //establece los valores después del renderizado
        setBaseWidth(tableRef.current.offsetWidth);
        setPlayer1top(baseWidth*0.2);   
        setPlayer2top(baseWidth*0.2);   
        setPlayer2Left( baseWidth - (baseWidth*0.09));      
        }
    }, [tableRef, baseWidth]);

    useEffect(() => { // actualiza cuando se cambia de tamaño a la pantalla
        if (tableRef.current.offsetWidth !== baseWidth) {    
        setBaseWidth(tableRef.current.offsetWidth);   
        setPlayer2Left( baseWidth - (baseWidth*0.0716));      
        }
    });
    
      
    

//-----------------jugador 2-----------------------
    //cuando renderise, crea un temporizador 
    //para permitir el movimiento del player2
    useEffect(() => {
        const timerId = setTimeout(() => {
            if(move === 0) {        
                setPlayer2top(player2top + baseWidth*0.03);
                if (player2top >= tableRef.current.offsetHeight - baseWidth*0.25) {setmove(1)};
            }
            if(move === 1) {        
                setPlayer2top(player2top - baseWidth*0.03);
                if (player2top <= tableRef.current.offsetHeight - baseWidth*0.65 ) {setmove(0)};
            }
        }, 100);

        return () => {
        clearTimeout(timerId);
        };
    }, [player2top, move, baseWidth]);


//-----------------jugador 1-----------------------
    //crea un manejador del evento de la tecla
    const handleKeyPress = (e) => {
        let tecla = e.key.toUpperCase();
        if (tecla === "ARROWDOWN" && player1top < tableRef.current.offsetHeight  - baseWidth*0.22) { 
        setPlayer1top(player1top + baseWidth*0.03) }
        if (tecla === "ARROWUP" && player1top > baseWidth*0.016) { 
        setPlayer1top(player1top - baseWidth*0.03) }
        
    }
    //al renderizar
    useEffect(() => {
        //se crea el evento
        document.addEventListener("keydown", handleKeyPress); //se llama el manejador
        //se elimina el evento
        return () => document.removeEventListener("keydown", handleKeyPress); 
    });


//----------------- ball ---------------------------    
    
    const ballInitialState = { "estado":0, "top": baseWidth*0.2, "left": baseWidth*0.2};

    function reducerBall(ballState, dispatch) {
        switch (dispatch.estado) {
            case 0:  
                return {...ballState, "top": ballState.top + baseWidth*0.0383,"left": ballState.left + baseWidth*0.0383,"estado": 0}
            case 1:  
                return {...ballState, "top": ballState.top - baseWidth*0.0383,"left": ballState.left + baseWidth*0.0383,"estado": 1}
            case 2:  
                return {...ballState, "top": ballState.top + baseWidth*0.0383,"left": ballState.left - baseWidth*0.0383,"estado": 2}
            case 3:  
                return {...ballState, "top": ballState.top - baseWidth*0.0383,"left": ballState.left - baseWidth*0.0383,"estado": 3}
            default:
                return {...ballState, "top": ballState.top + baseWidth*0.0383,"left": ballState.left + baseWidth*0.0383,"estado": 0}
        }
        
    }

    const [ballState, dispatch] = useReducer(reducerBall, ballInitialState);
    useEffect(() => {dispatch({"estado": 0});}, []);

    function mover (ballState){
        let refH      = tableRef.current.offsetHeight;
        let refW      = baseWidth;
        let est       = ballState.estado;
        let top       = ballState.top;
        let left      = ballState.left;
        let ballRigth = left+(refW*0.03);
        let ballBot   = top+(refW*0.05);
        let largoP1   = player1top + (refW*0.1666);
        let largoP2   = player2top + (refW*0.1666);
        

        //--------------------------------------------
        if      (ballBot  >= refH && est === 0) {dispatch({"estado": 1})}
        else if (ballBot  >= refH && est === 2) {dispatch({"estado": 3})}
        else if (top<= (refW*0.0083)    && est === 3) {dispatch({"estado": 2})}
        else if (top<= (refW*0.0083)    && est === 1) {dispatch({"estado": 0})}

        //--------------------------------------------
        else if (ballRigth >=     refW && est === 0 && (ballBot   < player2top || top > largoP2)) {colorRed(); setP1score(p1score + 1); dispatch({"estado": 2})} //point a favor del p1
        else if (ballRigth >=     refW && est === 1 && (ballBot   < player2top || top > largoP2)) {colorRed(); setP1score(p1score + 1); dispatch({"estado": 3})} //point a favor del p1
        else if (left <= (refW*0.0083) && est === 3 && (ballRigth < player1top || top > largoP1)) {colorRed(); setP2score(p2score + 1); dispatch({"estado": 1})} //point to p2
        else if (left <= (refW*0.0083) && est === 2 && (ballRigth < player1top || top > largoP1)) {colorRed(); setP2score(p2score + 1); dispatch({"estado": 0})} //point to p2

        //--------------------------------------------
        else if (ballRigth >= (refW*0.93)      && est === 0 && ((top > player2top && top < largoP2) || (ballBot > player2top && ballBot < largoP2))) {dispatch({"estado": 2})} // cuando llega left del p2 y esta en su largo rebota
        else if (ballRigth >= (refW*0.93)      && est === 1 && ((top > player2top && top < largoP2) || (ballBot > player2top && ballBot < largoP2))) {dispatch({"estado": 3})} // cuando llega left del p2 y esta en su largo rebota
        else if (left      <= (refW*0.09)   && est === 3 && ((top > player1top && top < largoP1) || (ballBot > player1top && ballBot < largoP1))) {dispatch({"estado": 1})}
        else if (left      <= (refW*0.09)   && est === 2 && ((top > player1top && top < largoP1) || (ballBot > player1top && ballBot < largoP1))) {dispatch({"estado": 0})} 
        //--------------------------------------------
        else{dispatch({"estado": est})}
    }

    useEffect(() => {
        const timerBall = setTimeout(()=>mover(ballState), 30); //velocidad
        return () => {clearTimeout(timerBall);};
    });

//-----------------puntajes--------------------------------
    const [p1score, setP1score] = useState(0);
    const [p2score, setP2score] = useState(0);
//---------------------------------------------------------
    const [color, setColor] = useState("black");
    function colorRed() {   
        setColor("red");
        let timer
        clearTimeout(timer);
        timer = setTimeout(() => {
          setColor("black");
        }, 150);  
    }


//---------------------------------------------------------
    return (
        <>
            
            <div className="table" id="table" ref={tableRef} style= {{backgroundColor:`${color}`}}>
                
                <Ball top={ballState.top} left={ballState.left} />
                <div style={{display:"flex"}}>
                  <div><Player top={player1top} left={baseWidth*0.0433} /></div>
                  <div><Player top={player2top} left={player2Left} /></div>
                </div>  
            </div>
            <Marcador score={p1score} score2={p2score}></Marcador>
            
            
        </>
    );
}
export default Table;

