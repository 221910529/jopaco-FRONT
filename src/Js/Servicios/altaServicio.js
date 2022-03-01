import React from "react";
import "../../Css/Formularios.css";

function altaServicios() {
  return (
    <div className="formulario">
      <form>
        <h1>Registro de solicitudes</h1>
        <div>
          Ingrese el nombre
          <input type="text" name="Nombre_Servicio" />
        </div>
        <div>
          Ingrese el costo estandar del servicio
          <input type="text" name="Costo" />
        </div>
        <div>
          Ingrese el tiempo estimado para realizar el servicio
          <input type="text" name="Tiempo_Estimado" />
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
