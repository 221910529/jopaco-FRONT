import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/subservicios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class ModificarSubservicios extends React.Component {
  state = {
    subservicio: [],
    mensaje: "",
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
  handleChange = (e) => {
    this.setState({
      // podemos encerrar esto en la variable subservicio peor como no tenemos otras variables no
      // es necesario por ahora
      ...this.state.subservicio,
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
          subservicio: info,
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
          Descripción: this.state.Descripción,
          Calificacion: this.state.Calificacion,
          Precio: this.state.Precio,
          Servicio_Id: this.state.Servicio_Id,
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
          window.location = "/VerSubservicios";
        }, 1000);
      })
      .catch(function (error) {
        if (error.response.data != null) {
          alert(error.response.data.errors.Nombre);
          alert(error.response.data.errors.Descripcion);
          alert(error.response.data.errors.Calificacion);
          alert(error.response.data.errors.Precio);
          alert(error.response.data.errors.Servicio_Id);
        }
      });
  };

  render() {
    const { subservicio, mensaje } = this.state;

    return (
      <div className="formulario">
        <div>
          <h1>Modificar subservicio {subservicio.Nombre}</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <form onSubmit={this.subForm}>
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
                      defaultValue={subservicio.Nombre}
                    />
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>Ingrese la Descripción</td>
                  <td>
                    <input
                      type="text"
                      name="Descripcion"
                      onChange={this.handleChange}
                      defaultValue={subservicio.Descripcion}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese la calificacion</td>
                  <td>
                    <input
                      type="text"
                      name="Calificacion"
                      onChange={this.handleChange}
                      defaultValue={subservicio.Calificacion}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el precio</td>
                  <td>
                    {" "}
                    <input
                      type="date"
                      name="Precio"
                      onChange={this.handleChange}
                      defaultValue={subservicio.Precio}
                    />
                  </td>
                </tr>
                
                <tr>
                  <td>Ingrese subservicio</td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      name="Servicio_Id"
                      onChange={this.handleChange}
                      defaultValue={subservicio.Servicio_Id}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit">Modificar subservicio</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModificarSubservicios;
