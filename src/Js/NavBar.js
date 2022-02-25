import "../Css/Botones.css";

function NavBar() {
  return (
    <div>
      <BotonOut name="Sara" />
    </div>
  );
}

function BotonOut() {
  return <button className="btn_Out">Iniciar Sesion</button>;
}

export default NavBar;
