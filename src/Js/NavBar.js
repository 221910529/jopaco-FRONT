import "../Css/Botones.css";
import ImagenLogo from "../logo.svg";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
import { Component } from "react";

let url = "http://127.0.0.1:8000/api/tokens/create";

const cookies = new Cookies();

class NavBar extends Component {
  CerrarSesion = () => {
    cookies.remove("token", { path: "/" });
    window.location.href = "./";
  };

  render() {
    if (cookies.get("token") == null) {
      return (
        <div>
          <div className="nav">
            <div className="Right">
              <Boton To="/" name="Jopaco" btn="btn_w"></Boton>
              <Logo />
              <Boton To="/AltaNegocios" name="Negocios" btn="btn_in"></Boton>
              <Boton
                To="/AltaServicios"
                name="Servicios"
                btn="btn_in"
              ></Boton>
              <Boton
                To="/AltaSolicitudes"
                name="Solicitudes"
                btn="btn_in"
              ></Boton>
              
            </div>

            <div className="Left">
              <Boton To="/Login" name="Iniciar Sesion" btn="btn_out"></Boton>
              <Boton To="/AltaUsuarios" name="Registrarse" btn="btn_out"></Boton>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav">
            <div className="Right">
              <Boton To="/" name="Jopaco" btn="btn_in"></Boton>
              <Logo />
              <Boton To="/AltaNegocios" name="Negocios" btn="btn_in"></Boton>
              <Boton
                To="/AltaServicios"
                name="Servicios"
                btn="btn_in"
              ></Boton>
              <Boton
                To="/AltaSolicitudes"
                name="Solicitudes"
                btn="btn_in"
              ></Boton>
              <Boton
                To="/AltaUsuarios"
                name="Registrar Usuario"
                btn="btn_in"
              ></Boton>
            </div>

            <div className="Left">
              Hola Usuario
              <button onClick={() => this.CerrarSesion()}>Cerrar Sesion</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

function Boton(props) {
  return (
    <button className={props.btn}>
      <Link to={props.To}>{props.name}</Link>
    </button>
  );
}

function Logo() {
  return <img src={ImagenLogo}></img>;
}

export default NavBar;
