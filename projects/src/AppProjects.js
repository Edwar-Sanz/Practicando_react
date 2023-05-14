import './styles/AppProjects.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.js'; 
import AppPong from "./components/pong/AppPong.js"
import Appcalculator from "./components/calculator/AppCalculator.js"
import AppChat from "./components/chatProject/AppChat.js"
import AppNotes from "./components/lista_tareas/AppNotes.js"
import AppTriki from "./components/triki/AppTriki.js"
import Appage from "./components/age/Appage.js"
import AppBateria from "./components/bateria/AppBateria.js"
import AppHooks from './components/hooks/Apphooks.js';
import AppCounter from './components/contador/AppContador.js';
import AppClose from './components/ClosePart/AppClosePart.js';

const router = createBrowserRouter(
  [
    { path: "/", element:<Home/>, errorElement: <Home/>},
    { path: "/portfolio/pong", element:<AppPong/>},
    { path: "/portfolio/calculator", element:<Appcalculator/>},
    { path: "/portfolio/chat", element:<AppChat/>},
    { path: "/portfolio/notes", element:<AppNotes/>},
    { path: "/portfolio/triki", element:<AppTriki/>},
    { path: "/portfolio/age", element:<Appage/>},
    { path: "/portfolio/drums", element:<AppBateria/>},
    { path: "/portfolio/hooks", element:<AppHooks/>},
    { path: "/portfolio/counter", element:<AppCounter/>},
    { path: "/portfolio/part", element:<AppClose/>}
  ]
);

function AppProjects() {
  return (
    <div className="AppProjects" >
      <RouterProvider router={router}/>
      <a href='/'>INICIO</a>
    </div>
  );
}

export default AppProjects;
