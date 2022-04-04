import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css"

let url = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();
const token = cookies.get("token");

class VerServicios extends React.Component {
  state = {
    servicios: [],
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
          servicios: info,
        });
      });
  }

  render() {
    const { servicios } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los servicios</h1>
        <table className="table2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Tiempo</th>
              <th>Foto</th>
              <th>Ver detalle</th>
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
                  <img
                    src={"http://127.0.0.1:8000/img/" + servicio.Foto}
                    width="80"
                    heigth="80"
                  />
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/DetalleServicios",
                      state: { id: servicio.id },
                    }}
                  >
                    <button className = "buttontables1">Ver detalle</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/ModificarServicios",
                      state: { id: servicio.id },
                    }}
                  >
                    <button className = "buttontables3">Modificar</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/EliminarServicios",
                      state: { id: servicio.id },
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

export default VerServicios;
