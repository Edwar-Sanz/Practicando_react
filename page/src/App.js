import ButtonAppBar from "./components/Barra.js"
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/about.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppPong from "./Projects/pong/AppPong.js";
import Appcalculator from "./Projects/calculator/AppCalculator.js";
import AppChat from "./Projects/chatProject/AppChat.js";
import AppNotes from "./Projects/lista_tareas/AppNotes.js";
import Contact from "./components/contact.js";

const router = createBrowserRouter(
  [
    { path: "/", element:<ButtonAppBar children={<Home/>} />, errorElement: <ButtonAppBar children={<Home/>} />},
    { path: "/about", element:<ButtonAppBar children={<About/>} />},
    { path: "/contact", element:<ButtonAppBar children={<Contact/>} />},
    { path: "/portfolio", element:<ButtonAppBar children={<Portfolio/>} />},
    { path: "/portfolio/pong", element:<ButtonAppBar children={<AppPong/>} />},
    { path: "/portfolio/calculator", element:<ButtonAppBar children={<Appcalculator/>} />},
    { path: "/portfolio/chat", element:<ButtonAppBar children={<AppChat/>} />},
    { path: "/portfolio/notes", element:<ButtonAppBar children={<AppNotes/>} />},
  ]
);

function App() {

  return (   
      <div className="App">
        
        {/* <ButtonAppBar/> */}
        <RouterProvider router={router}/>
      </div> 
  );
}







export default App;
