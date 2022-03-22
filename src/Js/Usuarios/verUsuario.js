import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

let url = "http://127.0.0.1:8000/api/usuarios";
const cookies = new Cookies();
const token = cookies.get("token");

class VerUsuarios extends React.Component {
  state = {
    usuarios: [],
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
          usuarios: info,
        });
      });
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los usuarios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Fecha Nacimiento</th>
              <th>Tipo Usuario</th>
              <th>Email</th>

              <th>Ver detalle</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{usuario.Nombre}</td>
                <td>{usuario.Apellido_Paterno}</td>
                <td>{usuario.Apellido_Materno}</td>
                <td>{usuario.Fecha_Nacimiento}</td>
                <td>{usuario.Tipo_Usuario}</td>
                <td>{usuario.Email}</td>
                <td>{usuario.Foto}</td>
                <td>
                  <img
                    src={"http://127.0.0.1:8000/img/" + usuario.Foto}
                    width="50"
                    heigth="50"
                  />
                </td>
                {/* <td>
                  <Link
                    to={{
                      pathname: "/DetalleServicios",
                      state: { id: servicio.id },
                    }}
                  >
                    <button>Ver detalle</button>
                  </Link>
                </td>
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
                  <Link
                    to={{
                      pathname: "/EliminarServicios",
                      state: { id: servicio.id },
                    }}
                  >
                    <button onClick={this.confirm}>Eliminar</button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerUsuarios;
