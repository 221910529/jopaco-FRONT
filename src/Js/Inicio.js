import NavBar from "./NavBar";
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";

import Dogs from "../pages/Dogs"



function Inicio() {
  return (
    <div>
      <NavBar></NavBar>
      <BrowserRouter>
          <Routes>
            <Route path='/Dogs' exact component={Dogs} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
