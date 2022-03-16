import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

let url = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();
const token = cookies.get("token");

class VerServicios extends React.Component {
  state = {
    servicios: [],
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
          servicios: info,
        });
      });
  }

  render() {
    const { servicios } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los servicios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Tiempo</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{servicio.Nombre_Servicio}</td>
                <td>{servicio.Costo}</td>
                <td>{servicio.Tiempo_Estimado}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/ModificarServicios",
                      state: { id: servicio.id },
                    }}
                  >
                    <button>Modificar</button>
                  </Link>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerServicios;
