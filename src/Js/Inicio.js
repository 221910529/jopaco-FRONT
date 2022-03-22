import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../Css/Inicio.css";

import NavBar from "./NavBar";
import Login from "./Login";
import Administracion from "./Administracion";
import Base from "./Base";
import Carousel from "./Carousel";

import AltaServicios from "../Js/Servicios/altaServicio";
import VerServicios from "../Js/Servicios/verServicios";
import ModificarServicios from "../Js/Servicios/modificarServicio";
import EliminarServicios from "../Js/Servicios/eliminarServicio";
import DetalleServicios from "../Js/Servicios/detalleServicio";

import AltaNegocios from "../Js/Negocios/altaNegocio";
import AltaSolicitudes from "../Js/Solicitudes/altaSolicitud";

import AltaUsuarios from "./Usuarios/altaUsuario";
import Usuarios from "./Usuarios/verUsuario";



export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/Login" component={Login} />
        <Route path="/AltaUsuarios" component={AltaUsuarios} />
        <Route path="/Usuarios" component={Usuarios} />
        <Route path="/Administracion" component={Administracion} />
        <Route path="/Carousel" component={Carousel} />

        <Route path="/AltaServicios" component={AltaServicios} />
        <Route path="/VerServicios" component={VerServicios} />
        <Route path="/ModificarServicios" component={ModificarServicios} />
        <Route path="/EliminarServicios" component={EliminarServicios} />
        <Route path="/DetalleServicios" component={DetalleServicios} />

        <Route path="/AltaNegocios" component={AltaNegocios} />
        <Route path="/AltaSolicitudes" component={AltaSolicitudes} />
      </Switch>
    </BrowserRouter>
  );
}
