import "../Css/Botones.css";
import ImagenLogo from "../logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <Inicio name="Inicio" />
        <Logo />
        <Link to="/Cats">Expenses</Link>
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
  return <img src={ImagenLogo} width="50" height="50"></img>;
}

export default NavBar;
