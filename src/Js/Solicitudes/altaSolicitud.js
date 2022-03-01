import React from "react";
import "../../Css/Formularios.css";

function altaSolicitudes() {
  return (
    <div className="formulario">
      <form>
        <h1>Registro de solicitudes</h1>
        <div>
          Ingrese el total de solicitudes
          <input type="text" name="Total" />
        </div>
        <div>
          Ingrese la hora de la solcitud
          <input type="text" name="Horario_Renta" />
        </div>
        <div>
          Ingrese el usuario que realiza la solicitud
          <input type="text" name="Usuario_Id" />
        </div>
        <div>
          Ingrese el servicio con el que se hace la solicitud
          <input type="text" name="Servicio_Id" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default altaSolicitudes;
