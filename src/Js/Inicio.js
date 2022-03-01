import "../Css/Inicio.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AltaUsuarios from "../Js/Usuarios/altaUsuario";
import VerUsuario from "../Js/Usuarios/verUsuario";
import Login from "./Login";
import Base from "./Base";

function Inicio() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <div className="hola">
          <Routes>
            <Route exact path="/" element={<Base />} />
            <Route path="/AltaUsuarios" element={<AltaUsuarios />} />
            <Route path="/VerUsuario" element={<VerUsuario />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" component={() => <div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
