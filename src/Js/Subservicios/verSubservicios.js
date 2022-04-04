import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css"

let url = "http://127.0.0.1:8000/api/subservicios";
const cookies = new Cookies();
const token = cookies.get("token");

class VerSubservicios extends React.Component {
  state = {
    subservicios: [],
  };
  confirm = (e) => {
    if (!window.confirm("Seguro que quieres borrarlo?")) {
      e.preventDefault();
    }
  };
  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info = res.data.data;
        console.log(info);
        this.setState({
          subservicios: info,
        });
      });
  }

  render() {
    const { subservicios } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los subservicios</h1>
        <table className="table2">
          <thead>
            <tr>
              <th>ID</th>

              <th>Nombre</th>
              <th>Descripción</th>
              <th>Calificación</th>
              <th>Precio</th>
              <th>Servicio relacionado</th>
              <th>Ver detalle</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {subservicios.map((subservicio, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{subservicio.Nombre}</td>
                <td>{subservicio.Descripcion}</td>
                <td>{subservicio.Calificacion}</td>
                <td>{subservicio.Precio}</td>
                <td>{subservicio.Servicio_Id}</td>
                
                <td>
                  <Link
                    to={{
                      pathname: "/Detallesubservicios",
                      state: { id: subservicio.id },
                    }}
                  >
                    <button className = "buttontables1">Ver detalle</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/Modificarsubservicios",
                      state: { id: subservicio.id },
                    }}
                  >
                    <button className = "buttontables3">Modificar</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/Eliminarsubservicios",
                      state: { id: subservicio.id },
                    }}
                  >
                    <button className = "buttontables2" onClick={this.confirm}>Eliminar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerSubservicios;
