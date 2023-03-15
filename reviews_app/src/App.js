import './estilos/App.css';
import Reviews from "./components/Reviews.js"
import './estilos/contenedor_principal_reviews.css';
import Boton from "./components/boton"
import './estilos/header.css';

function App() {
	return ( 
		<div className="App">
				
			<div id="contenedor_principal_reviews">
				<header id="header">
				<Boton name_button="inicio"/>
				<Boton name_button="buscar"/>
				<Boton name_button="agregar"/>
				<Boton name_button="perfil"/>

				</header>
				<h1 id="title_1"> Mis Reviews  </h1>
				<Reviews
					imagen="img_1.png"
					libro="El Renacuajo Paseador"
					autor="Pombo, Rafael"
					review="Esta es la historia del hijo de Rana, quien un día sale de fiesta ignorando la prohibición de su mamá. Con un ratón vecino visitan a doña Ratona, buscando francachela y comilona. El plan no termina muy bien."
				/>				
			</div>
			
		</div>
	);
}

export default App;
