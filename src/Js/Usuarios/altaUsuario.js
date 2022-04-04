import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import "../../Css/Tablas.css";

let url = "http://127.0.0.1:8000/api/usuarios";
const cookies = new Cookies();

const token = cookies.get("token");

class AltaUsuarios extends Component {
  state = {
    Nombre: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Fecha_Nacimiento: "",
    Tipo_Usuario: "",
    Email: "",
    Password: "",
    Foto: "",
    URLFoto: "",
  };
  //----------------------- Actualiza las estancias en la consola
  subirArchivos = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.setState({ URLFoto: reader.result });
      this.setState({ Foto: file });
    };
    console.log(this.state);
  };

  handleChange = async (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  RegistrarUsuario = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un usuario");
    } else {
      const form = new FormData();

      form.append("Nombre", this.state.Nombre);
      form.append("Apellido_Paterno", this.state.Apellido_Paterno);
      form.append("Apellido_Materno", this.state.Apellido_Materno);
      form.append("Fecha_Nacimiento", this.state.Fecha_Nacimiento);
      form.append("Tipo_Usuario", this.state.Tipo_Usuario);
      form.append("Email", this.state.Email);
      form.append("Password", this.state.Password);
      form.append("Foto", this.state.Foto);

      await axios
        .post(url, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.success != null) {
            alert(response.data.success);
          }
          setTimeout(function () {
            window.location = "/Usuarios";
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.data != null) {
            alert(error.response.data.message);
            console.log(error.response.data);
          }
        });
    }
  };
  render() {
    return (
      <div className="formulario">
        <div>
          <h1>Registro de usuarios</h1>
          <table className="formulario1">
            <tbody>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Nombre</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Nombre"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Apellido Paterno</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Apellido_Paterno"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Apellido Materno</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Apellido_Materno"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Fecha de Nacimiento</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="date"
                    name="Fecha_Nacimiento"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Correo Electronico</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Email"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Password</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Tipo de Usuario</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    className="inputs"
                    onChange={this.handleChange}
                    name="Tipo_Usuario"
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Usuario">Usuario</option>
                    <option value="Usuario_Privilegiado">
                      Usuario Privilegiado
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Cargue la imagen del usuarios</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="file"
                    name="Foto"
                    onChange={this.subirArchivos}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <button
                    className="botonesadmin"
                    onClick={() => this.RegistrarUsuario()}
                  >
                    Crear usuario
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AltaUsuarios;
