import NavBar from "./NavBar";
import React from "react";

function altaServicios() {
  return (
    <div>
      <form>
      <h1>Registro de solicitudes</h1>
        <div>
          Ingrese el nombre
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el costo estandar del servicio
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el tiempo estimado para realizar el servicio
          <input type="text" name="name" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// function Campo(props) {
//   return (
//     <div>
//       Ingrese el campo {props.name}
//       <input type="text" name={props.nombre} id="">
//         {props.name}
//       </input>
//     </div>
//   );
// }

export default altaServicios;