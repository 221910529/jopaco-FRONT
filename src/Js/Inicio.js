import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../Css/Inicio.css";

import NavBar from "./NavBar";
import Login from "./Vista/Login";
import Administracion from "./Vista/Administracion";
import Base from "./Vista/Base";
import BuscarNegocio from "./Vista/BuscarNegocios";
import VerNegocio from "../Js/Vista/VerNegocio";
import VerServicio from "../Js/Vista/VerServicio";

import Carousel from "./Carousel";
import Footer from "./Footer";
import Tarjeta from "./Card";

import AltaServicios from "../Js/Servicios/altaServicio";
import VerServicios from "../Js/Servicios/verServicios";
import ModificarServicios from "../Js/Servicios/modificarServicio";
import EliminarServicios from "../Js/Servicios/eliminarServicio";
import DetalleServicios from "../Js/Servicios/detalleServicio";

import AltaNegocios from "../Js/Negocios/altaNegocio";
import VerNegocios from "../Js/Negocios/verNegocios";
import ModificarNegocios from "../Js/Negocios/modificarNegocio";
import EliminarNegocios from "../Js/Negocios/eliminarNegocio";
import DetalleNegocios from "../Js/Negocios/detalleNegocio";

import AltaSolicitudes from "../Js/Solicitudes/altaSolicitud";

import AltaUsuarios from "./Usuarios/altaUsuario";
import Usuarios from "./Usuarios/verUsuario";
import ModificarUsuarios from "../Js/Usuarios/modificarUsuario";
import EliminarUsuarios from "../Js/Usuarios/eliminarUsuario";
import DetalleUsuarios from "../Js/Usuarios/detalleUsuario";

import AltaSubservicios from "../Js/Subservicios/altaSubservicios";
import VerSubservicios from "../Js/Subservicios/verSubservicios";
import ModificarSubservicios from "../Js/Subservicios/modificarSubservicios";
import EliminarSubservicios from "../Js/Subservicios/eliminarSubservicio";
import DetalleSubservicios from "../Js/Subservicios/detalleSubservicio";

import VerVentas from "./Ventas/verVentas";

import Carrito from "./Vista/Carrito";
import AgregarCarrito from "./Vista/Carrito";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/Login" component={Login} />

        <Route path="/Administracion" component={Administracion} />
        <Route path="/BuscarNegocio" component={BuscarNegocio} />
        <Route path="/VerNegocio" component={VerNegocio} />
        <Route path="/VerServicio" component={VerServicio} />

        <Route path="/Carousel" component={Carousel} />
        <Route path="/Footer" component={Footer} />
        <Route path="/Tarjeta" component={Tarjeta} />

        <Route path="/Footer" component={Footer} />

        <Route path="/AltaUsuarios" component={AltaUsuarios} />
        <Route path="/Usuarios" component={Usuarios} />
        <Route path="/ModificarUsuarios" component={ModificarUsuarios} />
        <Route path="/EliminarUsuarios" component={EliminarUsuarios} />
        <Route path="/DetalleUsuarios" component={DetalleUsuarios} />

        <Route path="/AltaServicios" component={AltaServicios} />
        <Route path="/VerServicios" component={VerServicios} />
        <Route path="/ModificarServicios" component={ModificarServicios} />
        <Route path="/EliminarServicios" component={EliminarServicios} />
        <Route path="/DetalleServicios" component={DetalleServicios} />

        <Route path="/AltaNegocios" component={AltaNegocios} />
        <Route path="/VerNegocios" component={VerNegocios} />
        <Route path="/EliminarNegocios" component={EliminarNegocios} />
        <Route path="/ModificarNegocios" component={ModificarNegocios} />
        <Route path="/DetalleNegocios" component={DetalleNegocios} />

        <Route path="/VerVentas" component={VerVentas} />

        <Route path="/AltaSubservicios" component={AltaSubservicios} />
        <Route path="/VerSubservicios" component={VerSubservicios} />
        <Route path="/EliminarSubservicios" component={EliminarSubservicios} />
        <Route path="/ModificarSubservicios" component={ModificarSubservicios} />
        <Route path="/DetalleSubservicios" component={DetalleSubservicios} />

        <Route path="/AltaSolicitudes" component={AltaSolicitudes} />

        <Route path="/Carrito" component={Carrito} />
        <Route path="/AgregarCarrito" component={AgregarCarrito} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
