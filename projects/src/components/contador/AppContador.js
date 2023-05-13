import './estilos/App.css';
import Contador from './components/contador_clic';
import Boton from './components/boton.js';
import {useState} from "react";

function App() {

	const [numClics, setNumClics] = useState(0);

	const sumarClick = () =>{
		setNumClics(numClics + 1);
	};
	const reiniciarContador = () =>{
		setNumClics(0);
	};

	return (
	<div className="App">
		
		<Contador
			clicks={numClics}
		/>

		<Boton
		texto="clic"
		esbotonClic={true}
		manejarClick ={sumarClick}     
		/>

		<Boton
		texto="reiniciar"
		esbotonClic={false}
		manejarClick ={reiniciarContador}     
		/>
	</div>
  );
}

export default App;
