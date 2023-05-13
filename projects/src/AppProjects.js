import './styles/AppProjects.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.js'; 
import AppPong from "./components/pong/AppPong.js"
import Appcalculator from "./components/calculator/AppCalculator.js"
import AppChat from "./components/chatProject/AppChat.js"
import AppNotes from "./components/lista_tareas/AppNotes"
import AppTriki from "./components/triki/AppTriki.js"
import Appage from "./components/age/Appage.js"
import AppBateria from "./components/bateria/AppBateria.js"

const router = createBrowserRouter(
  [
    { path: "/", element:<Home/>, errorElement: <Home/>},
    { path: "/portfolio/pong", element:<AppPong/>},
    { path: "/portfolio/calculator", element:<Appcalculator/>},
    { path: "/portfolio/chat", element:<AppChat/>},
    { path: "/portfolio/notes", element:<AppNotes/>},
    { path: "/portfolio/triki", element:<AppTriki/>},
    { path: "/portfolio/age", element:<Appage/>},
    { path: "/portfolio/drums", element:<AppBateria/>}
  ]
);

function AppProjects() {
  return (
    <div className="AppProjects">
      <a href='/'>INICIO</a>
      <RouterProvider router={router}/>
    </div>
  );
}

export default AppProjects;
