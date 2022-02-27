import NavBar from "./NavBar";
import React from "react";

function altaNegocios() {
  return (
    <div>
      <form>
        <h1>Registro de negocios</h1>
          <div>
            Ingrese el nombre
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese la dirección
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese el horario de servicio
            <input type="text" name="name" />
          </div>
          <div>
            Seleccione los días de servicio
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese la descripción del negocio
            <input type="text" name="name" />
          </div>
          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}



export default altaNegocios;