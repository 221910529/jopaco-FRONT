import "../Css/Botones.css";
import ImagenLogo from "../logo.png";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
import { Component } from "react";

const cookies = new Cookies();

const nombre = cookies.get("nombre");

class NavBar extends Component {
  CerrarSesion = () => {
    cookies.remove("token", { path: "/" });
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
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
            </div>

            <div className="Left">
              <Boton To="/Login" name="Iniciar Sesion" btn="btn_out"></Boton>
              <Boton
                To="/AltaUsuarios"
                name="Registrarse"
                btn="btn_out"
              ></Boton>
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
              <Boton To="/BuscarNegocio" name="Negocios" btn="btn_in"></Boton>
              <Boton To="/" name="Mision y Vision" btn="btn_in"></Boton>
              <Boton
                To="/Carrito"
                name="Carrito de Compras"
                btn="btn_in"
              ></Boton>
            </div>

            <div className="Left">
              {/* <img
                src={"http://127.0.0.1:8000/img/" + usuario.Foto}
                width="50"
                heigth="50"
              /> */}
              <div>
                <Link to="/Administracion">
                  <button>Administracion</button>
                </Link>
              </div>
              <div>Hola {nombre}</div>
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
  return <img src={ImagenLogo} width="30" height="50"></img>;
}

export default NavBar;
