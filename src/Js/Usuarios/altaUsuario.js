import NavBar from "./NavBar";

function altaUsuarios() {
  return (
    <div>
      <form action="">
        <Campo name="Nombre" nombre="nombre"></Campo>
        <Campo name="Apellido Paterno" nombre="app"></Campo>
        <Campo name="Apellido Materno" nombre="apm"></Campo>
        <CampoDate name="Fecha de nacimiento" nombre="fn"></CampoDate>
        <Campo name="Correo" nombre="correo"></Campo>
        <CampoPass name="Pashb word" nombre="pass"></CampoPass>
        <Campo name="Tipo de usuario" nombre="tipo_usuario"></Campo>
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

function CampoDate(props) {
  return (
    <div>
      Ingrese el campo {props.name}
      <input type="date" name={props.nombre} id="">
        {props.name}
      </input>
    </div>
  );
}

function CampoPass(props) {
  return (
    <div>
      Ingrese el campo {props.name}
      <input type="password" name={props.nombre} id="">
        {props.name}
      </input>
    </div>
  );
}

export default altaUsuarios;
