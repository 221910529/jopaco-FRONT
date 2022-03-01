import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/negocios";
const cookies = new Cookies();

const token = cookies.get("token");

class altaNegocios extends Component {
  state = {
    Nombre_Negocio: "",
    Direccion: "",
    Horario_Servicio: "",
    Dias_Servicio: "",
    Descripcion_Del_Negocio: "",
    Usuario_Id: "",
  };

  handleChange = async (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  RegistrarNegocio = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para crear un negocio");
    } else {
      await axios
        .post(
          url,
          {
            Nombre_Negocio: this.state.Nombre_Negocio,
            Direccion: this.state.Direccion,
            Horario_Servicio: this.state.Horario_Servicio,
            Dias_Servicio: this.state.Dias_Servicio,
            Descripcion_Del_Negocio: this.state.Descripcion_Del_Negocio,
            Usuario_Id: this.state.Usuario_Id,
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

            alert(error.response.data.errors.Nombre_Negocio);
            alert(error.response.data.errors.Direccion);
            alert(error.response.data.errors.Horario_Servicio);
            alert(error.response.data.errors.Dias_Servicio);
            alert(error.response.data.errors.Descripcion_Del_Negocio);
            alert(error.response.data.errors.Usuario_Id);
          }
        });
    }
  };

  render() {
    return (
      <div className="formulario">
        <div>
          <h1>Registro de negocios</h1>
          <div>
            Ingrese el nombre
            <input
              type="text"
              name="Nombre_Negocio"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Ingrese la dirección
            <input type="text" name="Direccion" onChange={this.handleChange} />
          </div>
          <div>
            Ingrese el horario de servicio
            <input
              type="text"
              name="Horario_Servicio"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Seleccione los días de servicio
            <input
              type="text"
              name="Dias_Servicio"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Ingrese la descripción del negocio
            <input
              type="text"
              name="Descripcion_Del_Negocio"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Seleccione el Usuario Asociado
            <input
              type="number"
              name="Usuario_Id"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={() => this.RegistrarNegocio()}>Crear Negocio</button>
        </div>
      </div>
    );
  }
}

export default altaNegocios;
