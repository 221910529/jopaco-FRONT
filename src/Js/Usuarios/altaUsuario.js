import NavBar from "./NavBar";

function altaUsuarios() {
  return (
    <div>
      <form action="">
        <Campo name="Nombre" nombre="nombre"></Campo>
      </form>
    </div>
  );
}

function Campo(props) {
  return (
    <div>
      Ingrese el campo {props.name}
      <input type="text" name={props.nombre} id="">
        {props.name}
      </input>
    </div>
  );
}

export default altaUsuarios;
