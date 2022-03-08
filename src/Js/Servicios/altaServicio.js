import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class altaServicios extends Component {
  state = {
    Nombre_Servicio: "",
    Costo: "",
    Tiempo_Estimado: "",
  };

  //-----------Va actulizando las estancias en la consola
  handleChange = async (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  //--- validamos si hay token
  RegistrarServicio = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para crear un servicio");
    } else {
      await axios //---- mandamos solicitud post al backend
        .post(
          url,
          {
            Nombre_Servicio: this.state.Nombre_Servicio,
            Costo: this.state.Costo,
            Tiempo_Estimado: this.state.Tiempo_Estimado,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);

          if (response.data.success != null) {
            alert(response.data.success);
          }
        })
        .catch(function (error) {
          if (error.response.data != null) {
            alert(error.response.data.message);

            alert(error.response.data.errors.Nombre_Servicio);
            alert(error.response.data.errors.Costo);
            alert(error.response.data.errors.Tiempo_Estimado);
          }
        });
    }
  };

  render() {
    return (
      <div className="formulario">
        <div>
          <h1>Registro de Servicios</h1>
          <table>
            <tr>
              <td>Ingrese el nombre</td>
              <td>
                {" "}
                <input
                  type="text"
                  name="Nombre_Servicio"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Ingrese el costo estandar del servicio</td>
              <td>
                {" "}
                <input type="text" name="Costo" onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>Ingrese el tiempo estimado para realizar el servicio</td>
              <td>
                <input
                  type="text"
                  name="Tiempo_Estimado"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </table>
          <button onClick={() => this.RegistrarServicio()}>
            Crear Servicio
          </button>
        </div>
      </div>
    );
  }
}

export default altaServicios;
