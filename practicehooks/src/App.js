import './App.css';

//---------------------------imports useReducer------------------------------------
import { Counter } from './components_useReducer/counterReducer';

//---------------------------imports useContext------------------------------------
import { CounterWithContext } from './components_usecontext/counterContext';
import { GlobalValue } from './components_usecontext/globalState';//provider

//---------------------------imports useEffect--------------------------------------
import { Effect } from './components_useEffect/effect';
import { OtherEffect } from './components_useEffect/otherEffect';

//---------------------------imports useRef-----------------------------------------
import { CounterRef } from './components_useRef/ref';
import { DoomRef } from './components_useRef/otherRef';
import { Notes } from './components_useReducer/notesReducer';
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------
function App() {
  
  return (
    
      <div className="App">
        <Counter/>
        <Notes/>
        <hr/>
        <GlobalValue>
          <CounterWithContext/>  
        </GlobalValue>
        <hr/>
        <Effect/>
        <hr/>
        <OtherEffect/>
        <hr/>
        <CounterRef/>
        <DoomRef/>
        <div style={{marginBottom:"300px"}}/>
      </div>
  );
}

//---------------------------------------------------------------------


export default App;
