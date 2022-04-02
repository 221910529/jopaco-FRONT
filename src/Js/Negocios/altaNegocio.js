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

            

  RegistrarNegocio = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para crear un negocio");
    } else {

      const form = new FormData();
      form.append("Nombre_Negocio",  this.state.Nombre_Negocio);
      form.append("Direccion",  this.state.Direccion);
      form.append("Horario_Servicio",  this.state.Horario_Servicio);
      form.append("Dias_Servicio",  this.state.Dias_Servicio);
      form.append("Descripcion_Del_Negocio",  this.state.Descripcion_Del_Negocio);
      form.append("Usuario_Id",  this.state.Usuario_Id);
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
          window.location = "/Negocios";
        }, 1000);
      })
        .catch(function (error) {
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
          <h1>Registro de negocios</h1>
          <div>
            Ingrese el nombre del negocio
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
          <div>
              Cargue la imagen del negocio
              <input type="file" name="Foto" onChange={this.subirArchivos} />
            </div>
          <button onClick={() => this.RegistrarNegocio()}>Crear Negocio</button>
        </div>
      </div>
    );
  }
}

export default altaNegocios;
