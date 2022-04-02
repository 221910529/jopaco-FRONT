import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/negocios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class ModificarNegocios extends React.Component {
  state = {
    negocio: [],
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
      // podemos encerrar esto en la variable negocio peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state.negocio,
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
          negocio: info,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();
    axios //---- mandamos solicitud post al backend
      .put(
        url + this.props.location.state.id,
        {
          Nombre_negocio: this.state.Nombre_negocio,
          Costo: this.state.Costo,
          Tiempo_Estimado: this.state.Tiempo_Estimado,
          Foto: this.state.Foto,
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
          window.location = "/Vernegocios";
        }, 1000);
      })
      .catch(function (error) {
        if (error.response.data != null) {
          alert(error.response.data.message);
          alert(error.response.data.errors.Nombre_negocio);
          alert(error.response.data.errors.Costo);
          alert(error.response.data.errors.Tiempo_Estimado);
          alert(error.response.data.errors.Foto);
        }
      });
  };

  render() {
    const { negocio, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Modificar negocio {negocio.Nombre_negocio}</h1>

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
                      name="Nombre_negocio"
                      onChange={this.handleChange}
                      defaultValue={negocio.Nombre_negocio}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el costo estandar del negocio</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Costo"
                      onChange={this.handleChange}
                      defaultValue={negocio.Costo}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el tiempo estimado para realizar el negocio</td>
                  <td>
                    <input
                      type="text"
                      name="Tiempo_Estimado"
                      onChange={this.handleChange}
                      defaultValue={negocio.Tiempo_Estimado}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cargue la imagen del negocio</td>
                  <td>
                    <input type="file" name="Foto" onChange={this.subirArchivos} 
                    defaultValue={negocio.Foto}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit">Modificar negocio</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModificarNegocios;
