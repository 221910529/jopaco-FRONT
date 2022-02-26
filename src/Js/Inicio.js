import "../Css/Inicio.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dogs from "../pages/Dogs";
import Cats from "../pages/Cats";

function Inicio() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <div className="hola">
          <Routes>
            <Route exact path="/" element={<Dogs />} />
            <Route path="/Cats" element={<Cats />} />
            <Route path="/Dogs" element={<Dogs />} />
            <Route path="*" component={() => <div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
