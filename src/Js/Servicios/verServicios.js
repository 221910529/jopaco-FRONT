import NavBar from "./NavBar";

function VerServicios() {
  return (
    <div>
      <table>
        <h1>Ver todos los servicios</h1>
        <th>
          <Dato name="nombre"></Dato>
          <Dato name="costo"></Dato>
          <Dato name="tiempo"></Dato>

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

export default VerServicios;