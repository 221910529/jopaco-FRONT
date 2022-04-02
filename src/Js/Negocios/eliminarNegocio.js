import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/negocios/";
const cookies = new Cookies();

const token = cookies.get("token");

class EliminarNegocios extends React.Component {
  state = {
    negocio: [],
    mensaje: "",
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
    axios //---- mandamos solicitud post al backend
      .delete(url + this.props.location.state.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        var respuesta = res.data.success;
        console.log(respuesta);
        alert(respuesta);

        setTimeout(function () {
          window.location = "/Vernegocios";
        }, 1000);
      });
  }
  render() {
    const { negocio, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>El negocio {negocio.Nombre_negocio} se eliminara</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <table>
            <tbody>
              <tr>
                <td>Nombre de negocio</td>
                <td>{negocio.Nombre_Negocio}</td>
              </tr>
              <tr>
                <td>Direccion</td>
                <td>{negocio.Direccion}</td>
              </tr>
              <tr>
                <td>Horario</td>
                <td>{negocio.Horario_Servicio}</td>
              </tr>
              <tr>
                <td>Días de servicio</td>
                <td>{negocio.Dias_Servicio}</td>
              </tr>
              <tr>
                <td>Descripción</td>
                <td>{negocio.Descripcion_Del_Negocio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EliminarNegocios;
