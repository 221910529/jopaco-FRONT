import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import "../../Css/Tablas.css";

let url = "https://back.jopaco.online/api/subservicios";
const cookies = new Cookies();

const token = cookies.get("token");

class AltaSubservicios extends Component {
  state = {
    Nombre: "",
    Descripcion: "",
    Calificacion: "",
    Precio: "",
    Servicio_Id: "",
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

  RegistrarSubservicio = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un subservicio");
    } else {
      const form = new FormData();

      form.append("Nombre", this.state.Nombre);
      form.append("Descripcion", this.state.Descripcion);
      form.append("Calificacion", this.state.Calificacion);
      form.append("Precio", this.state.Precio);
      form.append("Servicio_Id", this.state.Servicio_Id);

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
            window.location = "/VerSubservicios";
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
          <h1>Registro de subservicios</h1>
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
                  <h4>Ingrese el campo Descripcion</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Descripcion"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Calificacion</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="text"
                    name="Calificacion"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Precio</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="number"
                    name="Precio"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <h4>Ingrese el campo Servicio_Id</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="number"
                    name="Servicio_Id"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="trmargen">
                  <button
                    className="botonesadmin"
                    onClick={() => this.RegistrarSubservicio()}
                  >
                    Crear subservicio
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
export default AltaSubservicios;
