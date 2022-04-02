import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/usuarios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class detalleUsuarios extends React.Component {
  state = {
    usuario: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url + this.props.location.state.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        const info = res.data;
        // console.log(info);
        this.setState({
          usuario: info,
        });
      });
  }

  render() {
    const { usuario } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Detalle usuario {usuario.Nombre_usuario}</h1>
          <table>
            <tbody>
              <tr>
                <td>Nombre del usuario</td>
                <td>{usuario.Apellido_Paterno} {usuario.Apellido_Materno} {usuario.Nombre} </td>
              </tr>
              <tr>
                <td>Fecha de Nacimiento</td>
                <td>{usuario.Fecha_Nacimiento}</td>
              </tr>
              <tr>
                <td>Usuario asociado</td>
                <td>{usuario.Tipo_Usuario}</td>
              </tr>
              <tr>
                <td>Correo electronico</td>
                <td>{usuario.Email}</td>
              </tr>
              {/* revisar la sintaxis para consultar una foto */}
              {/* <tr>
                <td>Fecha de Nacimiento</td>
                <td>{usuario.Foto}</td>
              </tr> */}
            </tbody>
          </table>
          <Link
            to={{
              pathname: "/Usuarios",
            }}
          >
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default detalleUsuarios;
