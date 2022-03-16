import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../Css/Inicio.css";

import NavBar from "./NavBar";
import Login from "./Login";
import Base from "./Base";

import AltaServicios from "../Js/Servicios/altaServicio";
import VerServicios from "../Js/Servicios/verServicios";
import ModificarServicios from "../Js/Servicios/modificarServicio";

import AltaNegocios from "../Js/Negocios/altaNegocio";
import AltaSolicitudes from "../Js/Solicitudes/altaSolicitud";
import AltaUsuarios from "./Usuarios/altaUsuario";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/Login" component={Login} />
        <Route path="/AltaUsuarios" component={AltaUsuarios} />

        <Route path="/AltaServicios" component={AltaServicios} />
        <Route path="/VerServicios" component={VerServicios} />
        <Route path="/ModificarServicios" component={ModificarServicios} />

        <Route path="/AltaNegocios" component={AltaNegocios} />
        <Route path="/AltaSolicitudes" component={AltaSolicitudes} />
      </Switch>
    </BrowserRouter>
  );
}
