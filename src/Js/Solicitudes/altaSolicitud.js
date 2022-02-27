import NavBar from "./NavBar";
import React from "react";

function altaSolicitudes() {
  return (
    <div>
      <form>
        <h1>Registro de solicitudes</h1>
          <div>
            Ingrese el total de solicitudes
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese la hora de la solcitud
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese el usuario que realiza la solicitud
            <input type="text" name="name" />
          </div>
          <div>
            Ingrese el negocio con el que se hace la solicitud
            <input type="text" name="name" />
          </div>
          <div>
            Seleccione el servicio al cual se hace la solicitud
            <input type="text" name="name" />
          </div>
          <input type="submit" value="Submit" />
      </form>
  </div>
  );
}



export default altaSolicitudes;