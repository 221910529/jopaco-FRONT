import NavBar from "./NavBar";

function VerUsuarios() {
  return (
    <div>
      <table>
        <h1>Ver todos los usuarios</h1>
        <th>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
          <Dato name="nombre"></Dato>
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
