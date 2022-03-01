import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/solicitudes";
const cookies = new Cookies();

const token = cookies.get("token");

class altaSolicitudes extends Component {
  state = {
    Total: "",
    Horario_Renta: "",
    Usuario_Id: "",
    Servicio_Id: "",
  };

  //----------------------- Actualiza las estancias en la consola
  handleChange = async (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  RegistrarSolicitud = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar una solicitud");
    } else {
      await axios
        .post(
          url,
          {
            Total: this.state.Total,
            Horario_Renta: this.state.Horario_Renta,
            Usuario_Id: this.state.Usuario_Id,
            Servicio_Id: this.state.Servicio_Id,
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

            alert(error.response.data.errors.Total);
            alert(error.response.data.errors.Horario_Renta);
            alert(error.response.data.errors.Usuario_Id);
            alert(error.response.data.errors.Servicio_Id);
          }
        });
    }
  };

  render() {
    return (
      <div className="formulario">
        <div>
          <h1>Registro de solicitudes</h1>
          <div>
            Ingrese el total de solicitudes
            <input type="text" name="Total" onChange={this.handleChange} />
          </div>
          <div>
            Ingrese la hora de la solcitud
            <input
              type="text"
              name="Horario_Renta"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Ingrese el usuario que realiza la solicitud
            <input type="text" name="Usuario_Id" onChange={this.handleChange} />
          </div>
          <div>
            Ingrese el servicio con el que se hace la solicitud
            <input
              type="text"
              name="Servicio_Id"
              onChange={this.handleChange}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => this.RegistrarSolicitud()}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default altaSolicitudes;
