import NavBar from "./NavBar";

function VerSolicitudes() {
  return (
    <div>
      <table>
        <h1>Ver todos los negocios</h1>
        <th>
          <Dato name="total"></Dato>
          <Dato name="horario"></Dato>

          <Dato name="usuario_id"></Dato>
          <Dato name="servicio_id"></Dato>
          <Dato name="negocio_id"></Dato>
          
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

export default VerSolicitudes;