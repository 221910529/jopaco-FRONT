import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";

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
  }
//----------------------- Actualiza las estancias en la consola
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
      await axios
        .post(
          url,
          {
            Nombre: this.state.Nombre,
            Apellido_Paterno: this.state.Apellido_Paterno,
            Apellido_Materno: this.state.Apellido_Materno,
            Fecha_Nacimiento: this.state.Fecha_Nacimiento,
            Tipo_Usuario: this.state.Tipo_Usuario,
            Email: this.state.Email,
            Password: this.state.Password
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.data.success != null) {
            alert(response.data.success);
          }
        })
        .catch(function (error) {
          if (error.response.data != null) {
            alert(error.response.data.message);
            console.log(error.response.data);

            alert(error.response.data.errors.Nombre);
            alert(error.response.data.errors.Apellido_Paterno);
            alert(error.response.data.errors.Apellido_Materno);
            alert(error.response.data.errors.Fecha_Nacimiento);
            alert(error.response.data.errors.Tipo_Usuario);
            alert(error.response.data.errors.Email);
            alert(error.response.data.errors.Password);
          }
        });
    }
  };
render(){
    return (
      <div className="formulario">
        <div>
        <h1>Registro de usuarios</h1>
      <div>
        <div>
          Ingrese el campo Nombre
          <input type="text" name="Nombre" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Apellido Paterno
          <input type="text" name="Apellido_Paterno" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Apellido Materno
          <input type="text" name="Apellido_Materno" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Fecha de Nacimiento
          <input type="date" name="Fecha_Nacimiento" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Correo Electronico
          <input type="text" name="Email" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Password
          <input type="text" name="Password" onChange={this.handleChange} />
        </div>
        <div>
          Ingrese el campo Tipo de Usuario
          <input type="text" name="Tipo_Usuario" onChange={this.handleChange} />
        </div>
        <button
            className="btn btn-primary"
            onClick={() => this.RegistrarUsuario()}
          >
            Crear usuario
          </button>
      </div>
        </div>
      </div>
    );
  }
}
export default AltaUsuarios;