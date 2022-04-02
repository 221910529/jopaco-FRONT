import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

let url = "http://127.0.0.1:8000/api/negocios";
const cookies = new Cookies();
const token = cookies.get("token");

class VerNegocios extends React.Component {
  state = {
    negocios: [],
  };

  confirm = (e) => {
    if (!window.confirm("Confirmar eliminación")) {
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
          negocios: info,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los negocios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Nombre</th>
              <th>Direccion</th>
              <th>Horarios</th>
              <th>Días de servicio</th>
              <th>Descripción</th>
              <th>Usuario asociado</th>
              <th>Foto</th>
              <th>Ver detalle</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {negocios.map((negocio, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{negocio.Nombre_Negocio}</td>
                <td>{negocio.Direccion}</td>
                <td>{negocio.Horario_Servicio}</td>
                <td>{negocio.Dias_Servicio}</td>
                <td>{negocio.Descripcion_Del_Negocio}</td>
                <td>{negocio.Usuario_Id}</td>

                <td>
                  <img
                    src={"http://127.0.0.1:8000/img/" + negocio.Foto}
                    width="75"
                    heigth="75"
                  />
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/DetalleNegocios",
                      state: { id: negocio.id },
                    }}
                  >
                    <button>Ver detalle</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/ModificarNegocios",
                      state: { id: negocio.id },
                    }}
                  >
                    <button>Modificar</button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/EliminarNegocios",
                      state: { id: negocio.id },
                    }}
                  >
                    <button onClick={this.confirm}>Eliminar</button>
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

export default VerNegocios;
