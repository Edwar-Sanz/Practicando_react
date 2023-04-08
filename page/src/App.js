import ButtonAppBar from "./components/Barra.js"
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  [
    { path: "/", element:<ButtonAppBar children={<Home/>} />, errorElement: <ButtonAppBar children={<Home/>} />},
    { path: "/portfolio", element:<ButtonAppBar children={<Portfolio/>} />},
    { path: "/about", element:<ButtonAppBar children={<Home/>} />},
    { path: "/contact", element:<ButtonAppBar children={<Home/>} />},
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
