import React from "react";
import "../../Css/Inicio.css";
import "../../Css/Tablas.css";
import { Link } from "react-router-dom";

export default function Administracion() {
  return (
    <div className="administracion">
      <table className="table3">
        <tbody>
          <tr>
            <td>
              <h2 className="espacioabajo">Negocios</h2>
              <Boton To="/VerNegocios" name="Ver Negocios" btn="boton"></Boton>
              <Boton To="/AltaNegocios" name="Registrar Negocios" btn="boton"></Boton>
            </td>
            <td>
            <h2 className="espacioabajo">Servicios</h2>
              <Boton
                To="/VerServicios"
                name="Ver Servicios"
                btn="boton"
              ></Boton>
              <Boton To="/AltaServicios" name="Registrar Servicios" btn="boton"></Boton>
            </td>
          </tr>
          <tr>
            <td>
            <h2 className="espacioabajo">Usuarios</h2>
            <Boton className="botonesadmin2" To="/Usuarios" name=" Ver Usuarios" btn="boton"></Boton>
              <Boton
                To="/AltaUsuarios"
                name="Registrar Usuario"
                btn="boton"
              ></Boton>
            </td>
            <td>
            <h2 className="espacioabajo">SubServicios</h2>
              <Boton
                To="/AltaSubservicios"
                name="Registrar Subservicio"
                btn="boton"
              ></Boton>
              <Boton
                To="/VerSubservicios"
                name="Ver Subservicios"
                btn="boton"
              ></Boton>
            </td>             
          </tr>
          <tr>
            <td>
            <h2 className="espacioabajo">Ventas</h2>
              <Boton
                To="/VerVentas"
                name="Ver Ventas"
                btn="boton"
              ></Boton>
            </td>
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
