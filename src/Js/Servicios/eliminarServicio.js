import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/servicios/";
const cookies = new Cookies();

const token = cookies.get("token");

class EliminarServicios extends React.Component {
  state = {
    servicio: [],
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
          servicio: info,
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
      });
  }
  render() {
    const { servicio, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Registro de Servicios</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <table>
            <tbody>
              <tr>
                <td>Nombre de servicio</td>
                <td>{servicio.Nombre_Servicio}</td>
              </tr>
              <tr>
                <td>Costo estandar del servicio</td>
                <td>{servicio.Costo}</td>
              </tr>
              <tr>
                <td>Tiempo estimado para realizar el servicio</td>
                <td>{servicio.Tiempo_Estimado}/</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={{
              pathname: "/VerServicios",
              state: { id: servicio.id },
            }}
          >
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EliminarServicios;
