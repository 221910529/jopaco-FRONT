import NavBar from "./NavBar";

function VerNegocios() {
  return (
    <div>
      <table>
        <h1>Ver todos los negocios</h1>
        <th>
          <Dato name="nombre"></Dato>
          <Dato name="direccion"></Dato>
          <Dato name="horario"></Dato>
          <Dato name="dias"></Dato>
          <Dato name="descripcion"></Dato>
          
          <Dato name="usuario_id"></Dato>
          
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

export default VerNegocios;