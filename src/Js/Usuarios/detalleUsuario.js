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

      <><div className="Titulo">
        <h1>Mi Perfil {usuario.Nombre_usuario}</h1>
      </div>
      <div className="formularioDU">
          <div className="Foto">
            <tr>
              {/* <td >Mi foto</td> */}
              <td>
                <img
                  src={"http://127.0.0.1:8000/img/" + usuario.Foto}
                  width="180"
                  heigth="180" />
              </td>
            </tr>
          </div>

          <div className="Informacion">
          <table className="tablaInfor">
            <tbody>
            <tr>
              <td>Nombre del usuario:</td>
              <td>{usuario.Apellido_Paterno} {usuario.Apellido_Materno} {usuario.Nombre} </td>
            </tr>
            <tr>
              <td>Fecha de Nacimiento:</td>
              <td>{usuario.Fecha_Nacimiento}</td>
            </tr>
            <tr>
              <td>Usuario asociado:</td>
              <td>{usuario.Tipo_Usuario}</td>
            </tr>
            <tr>
              <td>Correo electronico:</td>
              <td>{usuario.Email}</td>
            </tr>
            </tbody>
          </table>
           
          </div>
          {/* revisar la sintaxis para consultar una foto */}
          {/* <tr>
      <td>Fecha de Nacimiento</td>
      <td>{usuario.Foto}</td>
    </tr> */}

          <Link
            to={{
              pathname: "/Usuarios",
            }}
          >
            <button>Regresar</button>
          </Link>
        </div></>
      
    );
  }
}

export default detalleUsuarios;
