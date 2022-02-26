function VerUsuarios() {
  return (
    <div>
      <table>
        <h1>Ver todos los usuarios</h1>
        <th>
          <Dato name="nombre"></Dato>
          <Dato name="app"></Dato>
          <Dato name="apm"></Dato>
          <Dato name="fn"></Dato>
          <Dato name="correo"></Dato>
          <Dato name="pass"></Dato>
          <Dato name="tipo_usuario"></Dato>
        </th>
        <td>
          <tr>ciclo para agarrar los datos del back</tr>
        </td>
      </table>
    </div>
  );
}

function Dato(props) {
  <tr>{props.name}</tr>;
}

export default VerUsuarios;
