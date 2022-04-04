import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/usuarios/";
const cookies = new Cookies();

const token = cookies.get("token");

class Eliminarusuarios extends React.Component {
  state = {
    usuario: [],
    mensaje: "",
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
    axios //---- mandamos solicitud post al backend
      .delete(url + this.props.location.state.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        var respuesta = res.data.success;
        console.log(respuesta);
        alert(respuesta);

        setTimeout(function () {
          window.location = "/VerUsuario";
        }, 1000);
      });
  }
  render() {
    const { usuario, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>El usuario {usuario.Nombre} se eliminara</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <table className="table3">
            <tbody>
              <tr>
                <td>Nombre de usuario</td>
                <td>{usuario.Apellido_Paterno} {usuario.Apellido_Materno} {usuario.Nombre}</td>
              </tr>
              <tr>
                <td>Fecha de nacimiento</td>
                <td>{usuario.Fecha_Nacimiento}</td>
              </tr>
              <tr>
                <td>Tipo de usuario</td>
                <td>{usuario.Tipo_Usuario}</td>
              </tr>
              <tr>
                <td>Correo</td>
                <td>{usuario.Email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Eliminarusuarios;
