import "../Css/Inicio.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AltaUsuarios from "../Js/Usuarios/altaUsuario";
import VerUsuario from "../Js/Usuarios/verUsuario";

function Inicio() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <div className="hola">
          <Routes>
            <Route exact path="/" element={<AltaUsuarios />} />
            <Route path="/AltaUsuarios" element={<AltaUsuarios />} />
            <Route path="/VerUsuario" element={<VerUsuario />} />
            <Route path="*" component={() => <div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
