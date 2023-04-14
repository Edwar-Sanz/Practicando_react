import "./styles/App.css";
import Pantalla from "./components/pantalla.js"
import Boton from "./components/boton.js"
import { useState } from "react";
import Grid from "@mui/material/Grid";


const buttons = [7, 8, 9, "/", 4, 5, 6, "*", 3, 2, 1, "-", 0, ".", "=", "+"];

function Appcalculator() {

	const [Valor, setValor] = useState("");

	const agregarInput = item => {
		if (item === "="){
			try{
				setValor(eval(Valor).toFixed(1)) 
			}catch{
				setValor("");
			}
		}else{		
		 setValor(Valor + item);
		}
	};

	const gridItemProp = {
	textAlign: "center",
	backgroundColor: "#fff",
	padding: "24px 24px",
	xs: 10,
	};

	return (
		<Grid container justifyContent={"center"}>
			<Grid item sx={gridItemProp}>
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
			</Grid>
			<Grid item sx={gridItemProp}>
				<div>
					<h3>hola</h3>
				</div>
			</Grid>
		</Grid>
		
	);
}

export default Appcalculator;
