import "../Css/Botones.css";
import ImagenLogo from "../logo.png";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
import { Component } from "react";

const cookies = new Cookies();

const nombre = cookies.get("nombre");
const tipo = cookies.get("tipo");
const Foto = cookies.get("Foto");

class NavBar extends Component {
  CerrarSesion = () => {
    cookies.remove("token", { path: "/" });
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("tipo", { path: "/" });
    cookies.remove("verificado", { path: "/" });
    cookies.remove("Foto", { path: "/" });
    window.location.href = "./";
  };

  render() {
    if (cookies.get("token") == null) {
      return (
        <div>
          <div className="nav">
            <div className="Right">
              <div>
                <Logo />
              </div>
              <div>
                <Boton To="/" name="Jopaco" btn="btn_w"></Boton>
              </div>

              <div></div>
            </div>
            <div>
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
        </div>
      );
    }
    if (tipo == "Administrador") {
      return (
        <div>
          <div className="nav">
            <div className="Right">
              <div>
                <Logo />
              </div>
              <div>
                <Boton To="/" name="Jopaco" btn="btn_in"></Boton>
              </div>

              <div>
                <Boton To="/BuscarNegocio" name="Negocios" btn="btn_in"></Boton>
              </div>
              <div>
                <Boton
                  To="/Carrito"
                  name="Carrito de Compras"
                  btn="btn_in"
                ></Boton>
              </div>
            </div>

            <div className="Usuario">Hola {nombre}</div>

            <div className="Left">
              <img
                src={"http://127.0.0.1:8000/img/" + Foto}
                width="50"
                heigth="50"
                alt="Foto no encontrada"
              />

              <div>
                <Link to="/Administracion">
                  <button className="admin">Administracion</button>
                </Link>
              </div>

              <div>
                <button className="cerrarS" onClick={() => this.CerrarSesion()}>
                  Cerrar Sesion
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (tipo == "Cliente") {
      return (
        <div>
          <div className="nav">
            <div className="Right">
              <div>
                <Logo />
              </div>
              <div>
                <Boton To="/" name="Jopaco" btn="btn_in"></Boton>
              </div>

              <div>
                <Boton To="/BuscarNegocio" name="Negocios" btn="btn_in"></Boton>
              </div>
              <div>
                <Boton
                  To="/Carrito"
                  name="Carrito de Compras"
                  btn="btn_in"
                ></Boton>
              </div>
            </div>

            <div className="Left">
              <div>
                <img
                  src={"http://127.0.0.1:8000/img/" + Foto}
                  width="50"
                  heigth="50"
                  alt="Foto no encontrada"
                />
              </div>

              <div className="Usuario">Hola {nombre}</div>

              <div>
                <button className="cerrarS" onClick={() => this.CerrarSesion()}>
                  Cerrar Sesion
                </button>
              </div>
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
