import "../Css/Inicio.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Login from "./Login";
import Base from "./Base";

import AltaNegocios from "../Js/Negocios/altaNegocio";
import AltaServicios from "../Js/Servicios/altaServicio";
import AltaSolicitudes from "../Js/Solicitudes/altaSolicitud";
import AltaUsuarios from "./Usuarios/altaUsuario";

function Inicio() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>

        <div className="hola">
          <Routes>
            <Route exact path="/" element={<Base />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AltaUsuarios" element={<AltaUsuarios />} />
            <Route path="*" component={() => <div>404</div>} />

            <Route path="/AltaNegocios" element={<AltaNegocios />} />
            <Route path="/AltaServicios" element={<AltaServicios />} />
            <Route path="/AltaSolicitudes" element={<AltaSolicitudes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Inicio;
