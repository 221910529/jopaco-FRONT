import NavBar from "../NavBar";
import React from "react";

function altaUsuarios() {
  return (
    <div>
      <h1>Registro de usuarios</h1>
      <form>
        <div>
          Ingrese el campo Nombre
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Apellido Paterno
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Apellido Materno
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Fecha de Nacimiento
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Correo Electronico
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Password
          <input type="text" name="name" />
        </div>
        <div>
          Ingrese el campo Tipo de Usuario
          <input type="text" name="name" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default altaUsuarios;
