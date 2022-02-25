import "../Css/Botones.css";

function NavBar() {
  return (
    <div>
      <div class="nav">
        <Inicio name="Inicio" />
        <Logo />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <BotonEx name="Registrarse" />
        <BotonOut name="Iniciar Sesion" />
        <BotonOut name="Registrarse" />
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
  return "Logo";
}

export default NavBar;
