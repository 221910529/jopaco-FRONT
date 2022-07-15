import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "https://back.jopaco.online/api/servicios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- declarando la variables que ocupo
class ModificarServicios extends React.Component {
  state = {
    Nombre_Servicio: "",
    Costo: "",
    Tiempo_Estimado: "",
    Foto: "",
    Negocio_Id: "",
    mensaje: "",
  };

  subirArchivos = async (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.setState({ Foto: reader.result });
    };
    console.log(this.state);
  };

  //-----------Va actulizando las estancias en la consola
  handleChange = (e) => {
    this.setState({
      // podemos encerrar esto en la variable servicio peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state,
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
        console.log(info);
        this.setState({
          Nombre_Servicio: info.Nombre_Servicio,
          Costo: info.Costo,
          Tiempo_Estimado: info.Tiempo_Estimado,
          Foto: info.Foto,
          Negocio_Id: info.Negocio_Id,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();
    axios //---- mandamos solicitud post al backend
      .patch(
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
        console.log(error);
        // if (error.response.data != null) {
        //   alert(error.response.data.message);
        //   alert(error.response.data.errors.Nombre_Servicio);
        //   alert(error.response.data.errors.Costo);
        //   alert(error.response.data.errors.Tiempo_Estimado);
        //   alert(error.response.data.errors.Foto);
        //   alert(error.response.data.errors.Negocio_Id);
        // }
      });
  };

  render() {
    const {
      Nombre_Servicio,
      Costo,
      Tiempo_Estimado,
      Foto,
      Negocio_Id,
      mensaje,
    } = this.state;

    return (
      <div className="formulario">
        <div>
          <h1>Modificar Servicio {Nombre_Servicio}</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <form onSubmit={this.subForm} encType="multipart/form-data">
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
                      defaultValue={Nombre_Servicio}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el costo estandar del servicio</td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      name="Costo"
                      onChange={this.handleChange}
                      defaultValue={Costo}
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
                      defaultValue={Tiempo_Estimado}
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
                      src={"https://back.jopaco.online/img/" + Foto}
                      width="50"
                      heigth="50"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el negocio relacionado</td>
                  <td>
                    <input
                      type="number"
                      name="Negocio_Id"
                      onChange={this.handleChange}
                      defaultValue={Negocio_Id}
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
