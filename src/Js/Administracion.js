import React from "react";
import "../Css/Inicio.css";
import { Link } from "react-router-dom";

export default function Administracion() {
  return (
    <div className="administracion">
      <table className="tabla">
        <tbody>
          <tr>
            <td>
              <Boton To="/AltaNegocios" name="Negocios" btn="boton"></Boton>
            </td>
            <td></td>
            <td>
              <Boton
                To="/VerServicios"
                name="Ver Servicios"
                btn="boton"
              ></Boton>
              <Boton To="/AltaServicios" name="Servicios" btn="boton"></Boton>
            </td>
          </tr>
          <tr>
            <td>
              <Boton
                To="/AltaSolicitudes"
                name="Solicitudes"
                btn="boton"
              ></Boton>
            </td>
            <td>
              <Boton
                To="/AltaUsuarios"
                name="Registrar Usuario"
                btn="boton"
              ></Boton>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Boton(props) {
  return (
    <button className={props.btn}>
      <Link to={props.To}>{props.name}</Link>
    </button>
  );
}
