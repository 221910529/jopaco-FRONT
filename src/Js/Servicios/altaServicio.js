import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

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
    Foto: "",
    URLFoto: "",
    Negocio_Id: "",
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
      const form = new FormData();

      form.append("Nombre_Servicio", this.state.Nombre_Servicio);
      form.append("Costo", this.state.Costo);
      form.append("Tiempo_Estimado", this.state.Tiempo_Estimado);
      form.append("Foto", this.state.Foto);
      form.append("Negocio_Id", this.state.Negocio_Id);

      await axios //---- mandamos solicitud post al backend
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
            window.location = "/VerServicios";
          }, 1000);
        })
        .catch(function (error) {
          if (error.response.data != null) {
            alert(error.response.data.message);

            alert(error.response.data.errors.Nombre_Servicio);
            alert(error.response.data.errors.Costo);
            alert(error.response.data.errors.Tiempo_Estimado);
            alert(error.response.data.errors.Foto);
            alert(error.response.data.errors.Negocio_Id);
          }
        });
    }
  };

  render() {
    return (
      <div className="formulario">
        <div>
          <h1>Registro de Servicios</h1>
          <table className="formulario1">
            <tbody>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el nombre</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Nombre_Servicio"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el costo estandar del servicio</h4>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    className="inputs"
                    type="text"
                    name="Costo"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el tiempo estimado para realizar el servicio</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Tiempo_Estimado"
                    onChange={this.handleChange}
                  />
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
                  <h4>Seleccione el Negocio Asociado</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="number"
                    name="Negocio_Id"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <button
                    className="botonesadmin"
                    onClick={() => this.RegistrarServicio()}
                  >
                    Crear Servicio
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

export default altaServicios;
