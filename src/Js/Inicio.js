import NavBar from "./NavBar";

function Inicio() {
  return (
    <div>
      <form action="">
        <Campo nombre="Nombre" name="nombre"></Campo>
        <Campo nombre="Apellido Paterno" name="app"></Campo>
      </form>
    </div>
  );
}

function Campo(props) {
  return (
    <div>
      "Ingrese su "{props.nombre}
      <input type="text" name={props.name} id="">
        {props.nombre}
      </input>
    </div>
  );
}

export default Inicio;
