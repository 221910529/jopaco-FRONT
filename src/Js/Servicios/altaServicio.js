import NavBar from "./NavBar";

function altaServicios() {
  return (
    <div>
      <form action="">
        <Campo name="Nombre" nombre="nombre"></Campo>
        <Campo name="Costo" nombre="costo"></Campo>
        <Campo name="Tiempo estimado" nombre="tiempo"></Campo>
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

export default altaServicios;