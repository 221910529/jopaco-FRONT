import React from "react";
import { Component } from "react";
import axios from "axios";
import "../Css/Login.css";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/tokens/create";
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
        console.log(response.data);

        if (response.data.token) {
          var token = response.data.token;
          console.log(token);
          cookies.set("token", token, { path: "/" });
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
      .catch((error) => console.log(error.data));
  };

  render() {
    return (
      <div className="container">
        <div>
          <div>Direccion de correo de electronico</div>
          <input
            type="email"
            className="form-control"
            name="Email"
            onChange={this.handleChange}
          ></input>
          <div>No compartas tu credencial, con nadie mas.</div>
          <div>Contraseña</div>
          <input
            type="password"
            className="form-control"
            name="Password"
            onChange={this.handleChange}
          ></input>

          <div>
            Recuerdame
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => this.IniciarSesion()}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
