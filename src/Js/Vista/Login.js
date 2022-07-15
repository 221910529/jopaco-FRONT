import React from "react";
import { Component } from "react";
import axios from "axios";
import "../../Css/Login.css";
import Cookies from "universal-cookie";

let url = "https://back.jopaco.online/api/tokens/create";
const cookies = new Cookies();

class Login extends Component {
  state = {
    Email: "",
    Password: "",
  };

  handleChange = async (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  IniciarSesion = async () => {
    await axios
      .post(url, {
        email: this.state.Email,
        password: this.state.Password,
      })
      .then((response) => {
        console.log(response);

        if (response.data.token) {
          var token = response.data.token;
          var id = response.data.user.id;
          var nombre = response.data.user.Nombre;
          var tipo = response.data.user.Tipo_Usuario;
          var verificado = response.data.user.confirmed;
          var foto = response.data.user.Foto;
          console.log(token);
          console.log(id);
          console.log(nombre);
          console.log(tipo);

          cookies.set("token", token, { path: "/" });
          cookies.set("id", id, { path: "/" });
          cookies.set("nombre", nombre, { path: "/" });
          cookies.set("tipo", tipo, { path: "/" });
          cookies.set("verificado", verificado, { path: "/" });
          cookies.set("Foto", foto, { path: "/" });

          alert(
            "Bienvenido " +
              response.data.user.Nombre +
              " " +
              response.data.user.Apellido_Paterno +
              " " +
              response.data.user.Apellido_Materno
          );
          window.location.href = "./";
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div className="card1">
          <table className="formulario1">
            <tbody>
              <tr>
                <td>
                  <h2 className="trmargen">
                    Direccion de correo de electronico
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="email"
                    //className="form-control"
                    name="Email"
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="trmargen">Contraseña</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="inputs"
                    type="password"
                    //className="form-control"
                    name="Password"
                    onChange={this.handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="trmargen">
                    No compartas tu credenciales, con nadie.
                  </h4>
                </td>
              </tr>

              <tr>
                <td>
                  <button
                    className="botonesadmin"
                    onClick={() => this.IniciarSesion()}
                  >
                    Entrar
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

export default Login;
