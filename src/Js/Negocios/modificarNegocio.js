import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
//import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "https://back.jopaco.online/api/negocios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class ModificarNegocios extends React.Component {
  state = {
    Nombre_Negocio: "",
    Direccion: "",
    Horario_Servicio: "",
    Dias_Servicio: "",
    Descripcion_Del_Negocio: "",
    Usuario_Id: "",
    Foto: "",
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
        // console.log(info);
        this.setState({
          Nombre_Negocio: info.Nombre_Negocio,
          Direccion: info.Direccion,
          Horario_Servicio: info.Horario_Servicio,
          Dias_Servicio: info.Dias_Servicio,
          Descripcion_Del_Negocio: info.Descripcion_Del_Negocio,
          Usuario_Id: info.Usuario_Id,
          Foto: info.Foto,
        });
      });
  }

  subForm = (e) => {
    e.preventDefault();
    axios //---- mandamos solicitud post al backend
      .patch(
        url + this.props.location.state.id,
        {
          Nombre_Negocio: this.state.Nombre_Negocio,
          Direccion: this.state.Direccion,
          Horario_Servicio: this.state.Horario_Servicio,
          Dias_Servicio: this.state.Dias_Servicio,
          Descripcion_Del_Negocio: this.state.Descripcion_Del_Negocio,
          Usuario_Id: this.state.Usuario_Id,
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
        console.log(error);
        //if (error.response.data != null) {
        // alert(error.response.data.message);
        // alert(error.response.data.errors.Nombre_Negocio);
        // alert(error.response.data.errors.Direccion);
        // alert(error.response.data.errors.Horario_Servicio);
        // alert(error.response.data.errors.Dias_Servicio);
        // alert(error.response.data.errors.Descripcion_Del_Negocio);
        // alert(error.response.data.errors.Usuario_Id);
        // alert(error.response.data.errors.Foto);
        //}
      });
  };

  render() {
    const {
      Nombre_Negocio,
      Direccion,
      Horario_Servicio,
      Dias_Servicio,
      Descripcion_Del_Negocio,
      Usuario_Id,
      Foto,
      mensaje,
    } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Modificar negocio {Nombre_Negocio}</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <form onSubmit={this.subForm} encType="multipart/form-data">
            <table>
              <tbody>
                <tr>
                  <td>Ingrese el nombre del negocio</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="Nombre_Negocio"
                      onChange={this.handleChange}
                      defaultValue={Nombre_Negocio}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese la dirección del establecimiento</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="text"
                      name="Direccion"
                      onChange={this.handleChange}
                      defaultValue={Direccion}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el horario de servicio</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="Horario_Servicio"
                      onChange={this.handleChange}
                      defaultValue={Horario_Servicio}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Ingrese los días de servicio</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="Dias_Servicio"
                      onChange={this.handleChange}
                      defaultValue={Dias_Servicio}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Ingrese la descripción del negocio</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="Descripcion_Del_Negocio"
                      onChange={this.handleChange}
                      defaultValue={Descripcion_Del_Negocio}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ingrese el usuario asociado</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      name="Usuario_Id"
                      onChange={this.handleChange}
                      defaultValue={Usuario_Id}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Ingrese la imagen del negocio</td>
                </tr>
                <tr>
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
