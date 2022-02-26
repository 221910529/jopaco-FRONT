import NavBar from "./NavBar";

function altaSolicitudes() {
  return (
    <div>
      <form action="">
        <Campo name="Total" nombre="total"></Campo>
        <Campo name="Horario" nombre="horario"></Campo>

        <Campo name="ID usuario" nombre="usuario_id"></Campo>
        <Campo name="ID servicio" nombre="servicio_id"></Campo>
        <Campo name="ID negocio" nombre="negocio_id"></Campo>
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

export default altaSolicitudes;