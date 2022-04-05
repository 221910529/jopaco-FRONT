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
    Nombre: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Fecha_Nacimiento: "",
    Tipo_Usuario: "",
    Email: "",
    Password: "",
    Foto: "",
    mensaje: "",
  };

  //----------------------- Actualiza las estancias en la consola
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
      // podemos encerrar esto en la variable usuario peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
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
        //console.log(info);
        this.setState({
          Nombre: info.Nombre,
          Apellido_Paterno: info.Apellido_Paterno,
          Apellido_Materno: info.Apellido_Materno,
          Fecha_Nacimiento: info.Fecha_Nacimiento,
          Tipo_Usuario: info.Tipo_Usuario,
          Email: info.Email,
          Password: info.Password,
          Foto: info.Foto,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();

    axios
      .patch(
        url + this.props.location.state.id,
        {
          Nombre: this.state.Nombre,
          Apellido_Paterno: this.state.Apellido_Paterno,
          Apellido_Materno: this.state.Apellido_Materno,
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
          window.location = "/Usuarios";
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        // if (error.response.data != null) {
        //   alert(error.response.data.errors.Nombre);
        //   alert(error.response.data.errors.Apellido_Paterno);
        //   alert(error.response.data.errors.Apellido_Materno);
        //   alert(error.response.data.errors.Fecha_Nacimiento);
        //   alert(error.response.data.errors.Tipo_Usuario);
        //   alert(error.response.data.errors.Email);
        //   alert(error.response.data.errors.Password);
        // }
      });
  };

  render() {
    const {
      Nombre,
      Apellido_Paterno,
      Apellido_Materno,
      Fecha_Nacimiento,
      Tipo_Usuario,
      Email,
      Password,
      Foto,
      mensaje,
    } = this.state;

    return (
      <div className="formulario">
        <div>
          <h1>Modificar usuario {Nombre}</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <form onSubmit={this.subForm} encType="multipart/form-data">
            <table>
              <tbody>
                <tr>
                  <td>Ingrese su nombre</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Nombre"
                      onChange={this.handleChange}
                      defaultValue={Nombre}
                    />
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>Ingrese su apellido paterno</td>
                  <td>
                    <input
                      type="text"
                      name="Apellido_Paterno"
                      onChange={this.handleChange}
                      defaultValue={Apellido_Paterno}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el apellido materno</td>
                  <td>
                    <input
                      type="text"
                      name="Apellido_Materno"
                      onChange={this.handleChange}
                      defaultValue={Apellido_Materno}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese la fecha de nacimiento</td>
                  <td>
                    {" "}
                    <input
                      type="date"
                      name="Fecha_Nacimiento"
                      onChange={this.handleChange}
                      defaultValue={Fecha_Nacimiento}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Select tipo de usuario</td>
                  <td>
                    <select onChange={this.handleChange} name="Tipo_Usuario">
                      <option value="null">Seleccione una opcion</option>
                      {Tipo_Usuario == "Administrador" && (
                        <>
                          <option value="1" selected>
                            Administrador
                          </option>
                          <option value="2">Cliente</option>
                          <option value="3">
                            Proveedor
                          </option>
                        </>
                      )}
                      {Tipo_Usuario == "Usuario" && (
                        <>
                          <option value="Administrador">Administrador</option>
                          <option value="Usuario" selected>
                            Usuario
                          </option>
                          <option value="Usuario_Privilegiado">
                            Usuario Privilegiado
                          </option>
                        </>
                      )}
                      {Tipo_Usuario == "Usuario_Privilegiado" && (
                        <>
                          <option value="Administrador">Administrador</option>
                          <option value="Usuario">Usuario</option>
                          <option value="Usuario_Privilegiado" selected>
                            Usuario Privilegiado
                          </option>
                        </>
                      )}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el correo electronico</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Email"
                      onChange={this.handleChange}
                      defaultValue={Email}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese la contraseña</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Password"
                      onChange={this.handleChange}
                      defaultValue={Password}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Ingrese la imagen del usuario</td>
                  <td>
                    {" "}
                    <input
                      type="file"
                      name="Foto"
                      //onChange={this.handleChange}
                      onChange={this.subirArchivos}
                    />
                    <img
                      src={"http://127.0.0.1:8000/img/" + Foto}
                      width="50"
                      heigth="50"
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

export default ModificarUsuarios;
