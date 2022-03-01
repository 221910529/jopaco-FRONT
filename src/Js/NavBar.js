import "../Css/Botones.css";
import ImagenLogo from "../logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div className="Right">
          <Boton To="/" name="Jopaco" btn="btn_in"></Boton>
          <Logo />
          <Boton To="/AltaUsuarios" name="Alta Usuarios" btn="btn_in"></Boton>
          <Boton To="/VerUsuarios" name="Ver Usuarios" btn="btn_in"></Boton>
        </div>

        <div className="Left">
          <Boton To="/AltaUsuarios" name="Iniciar Sesion" btn="btn_out"></Boton>
          <Boton To="/VerUsuarios" name="Cerrar Sesion" btn="btn_out"></Boton>
        </div>
      </div>
    </div>
  );
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
