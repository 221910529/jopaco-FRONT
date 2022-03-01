import React from "react";
import "../../Css/Formularios.css";

function altaNegocios() {
  return (
    <div className="formulario">
      <form>
        <h1>Registro de negocios</h1>
        <div>
          Ingrese el nombre
          <input type="text" name="Nombre_Negocio" />
        </div>
        <div>
          Ingrese la dirección
          <input type="text" name="Direccion" />
        </div>
        <div>
          Ingrese el horario de servicio
          <input type="text" name="Horario_Servicio" />
        </div>
        <div>
          Seleccione los días de servicio
          <input type="text" name="Dias_Servicio" />
        </div>
        <div>
          Ingrese la descripción del negocio
          <input type="text" name="Descripcion_Del_Negocio" />
        </div>
        <div>
          Seleccione el Usuario Asociado
          <input type="text" name="Usuario_Id" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default altaNegocios;
