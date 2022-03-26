import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/usuarios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class ModificarUsuarios extends React.Component {
  state = {
    usuario: [],
    mensaje: "",
  };

  //-----------Va actulizando las estancias en la consola
  handleChange = (e) => {
    this.setState({
      // podemos encerrar esto en la variable usuario peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state.usuario,
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
          usuario: info,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();
    axios //---- mandamos solicitud post al backend
      .put(
        url + this.props.location.state.id,
        {
            Nombre: this.state.Nombre,
            Apellido_Paterno: this.state.Apellido_Paterno,
            Apellido_Matern: this.state.Apellido_Materno,
            Fecha_Nacimiento: this.state.Fecha_Nacimiento,
            Tipo_Usuario: this.state.Tipo_Usuario,
            Email: this.state.Email,
            Password: this.state.Password,
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
          window.location = "/Verusuarios";
        }, 1000);
      })
      .catch(function (error) {
        if (error.response.data != null) {
            alert(error.response.data.errors.Nombre);
            alert(error.response.data.errors.Apellido_Paterno);
            alert(error.response.data.errors.Apellido_Materno);
            alert(error.response.data.errors.Fecha_Nacimiento);
            alert(error.response.data.errors.Tipo_Usuario);
            alert(error.response.data.errors.Email);
            alert(error.response.data.errors.Password);
        }
      });
  };

  render() {
    const { usuario, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Modificar usuario {usuario.Nombre_usuario}</h1>

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
                      name="Nombre_usuario"
                      onChange={this.handleChange}
                      defaultValue={usuario.Nombre_usuario}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el costo estandar del usuario</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Costo"
                      onChange={this.handleChange}
                      defaultValue={usuario.Costo}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el tiempo estimado para realizar el usuario</td>
                  <td>
                    <input
                      type="text"
                      name="Tiempo_Estimado"
                      onChange={this.handleChange}
                      defaultValue={usuario.Tiempo_Estimado}
                    />
                  </td>
                </tr>
                

              </tbody>
            </table>

            <button type="submit">Modificar usuario</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modificarusuarios;
