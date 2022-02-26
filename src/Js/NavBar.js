import "../Css/Botones.css";
import ImagenLogo from "../logo.svg";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <Inicio name="Inicio" />
        <Logo />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <div className="Left">
          <BotonOut name="Iniciar Sesion" />
          <BotonOut name="Registrarse" />
        </div>
      </div>
    </div>
  );
}

function BotonOut(props) {
  return <button className="btn_Out">{props.name}</button>;
}

function BotonEx(props) {
  return <button className="btn_Ex">{props.name}</button>;
}

function Inicio(props) {
  return <button className="btn_Out">{props.name}</button>;
}

function Logo(props) {
  return (
    <img
      src={ImagenLogo}
      width="50"
      height="50"
      alt="insertar SVG con la etiqueta image"
    ></img>
  );
}

export default NavBar;
