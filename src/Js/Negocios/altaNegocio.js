import NavBar from "./NavBar";

function altaNegocios() {
  return (
    <div>
      <form action="">
        <Campo name="Nombre" nombre="nombre"></Campo>
        <Campo name="Dirección" nombre="direccion"></Campo>
        <Campo name="Horario de Servicio" nombre="horario"></Campo>
        <Campo name="Días de servicio" nombre="dias"></Campo>
        <Campo name="Descripción" nombre="descripcion"></Campo>

        <Campo name="Id del usuario" nombre="usuario_id"></Campo>
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

export default altaNegocios;