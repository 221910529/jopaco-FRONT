import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/servicios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class ModificarServicios extends React.Component {
  state = {
    servicio: [],
    mensaje: "",
  };

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
  handleChange = (e) => {
    this.setState({
      // podemos encerrar esto en la variable servicio peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state.servicio,
      [e.target.name]: e.target.value,
    });
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
          servicio: info,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();
    axios //---- mandamos solicitud post al backend
      .put(
        url + this.props.location.state.id,
        {
          Nombre_Servicio: this.state.Nombre_Servicio,
          Costo: this.state.Costo,
          Tiempo_Estimado: this.state.Tiempo_Estimado,
          Foto: this.state.Foto,
          Negocio_Id: this.state.Negocio_Id,
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
          this.setState({ mensaje: response.data.success });
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
  };

  render() {
    const { servicio, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Modificar Servicio {servicio.Nombre_Servicio}</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <form onSubmit={this.subForm}>
            <table>
              <tbody>
                <tr>
                  <td>Ingrese el nombre</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Nombre_Servicio"
                      onChange={this.handleChange}
                      defaultValue={servicio.Nombre_Servicio}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el costo estandar del servicio</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Costo"
                      onChange={this.handleChange}
                      defaultValue={servicio.Costo}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el tiempo estimado para realizar el servicio</td>
                  <td>
                    <input
                      type="text"
                      name="Tiempo_Estimado"
                      onChange={this.handleChange}
                      defaultValue={servicio.Tiempo_Estimado}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cargue la imagen del servicio</td>
                  <td>
                  <input
                      type="file"
                      name="Foto"
                      //onChange={this.handleChange}
                      onChange={this.subirArchivos}
                    />
                    <img
                      src={"http://127.0.0.1:8000/img/" + servicio.Foto}
                      width="50"
                      heigth="50"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el negocio relacionado</td>
                  <td>
                    <input
                      type="text"
                      name="Negocio_Id"
                      onChange={this.handleChange}
                      defaultValue={servicio.Negocio_Id}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit">Modificar Servicio</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModificarServicios;
