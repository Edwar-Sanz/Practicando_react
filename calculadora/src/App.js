import "./styles/App.css";
import Pantalla from "./components/pantalla.js"
import Boton from "./components/boton.js"
import { useState } from "react";

const buttons = [7, 8, 9, "/", 4, 5, 6, "*", 3, 2, 1, "-", 0, ".", "=", "+"];

function App() {

	const [Valor, setValor] = useState("");

	const agregarInput = item => {
		item === "=" ?  setValor(eval(Valor).toFixed(1)) : setValor(Valor + item);
	  };

	return (
		<div className="App">
			<div className="calc_container">
				<Pantalla
				value={Valor}
				funClear={() => setValor("")}
				/>
		{
			buttons.map((item) => {
				return (	
					<Boton item={item} 
						key={item}
						funtionClic={agregarInput}
					/>
				)
			})
        }

			</div>
		</div>
	);
}

export default App;
