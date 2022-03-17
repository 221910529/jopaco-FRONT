import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/servicios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class detalleServicios extends React.Component {
  state = {
    servicio: [],
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
  }

  render() {
    const { servicio } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Detalle servicio {servicio.Nombre_Servicio}</h1>
          <table>
            <tbody>
              <tr>
                <td>Ingrese el costo estandar del servicio</td>
                <td>{servicio.Costo}</td>
              </tr>
              <tr>
                <td>Ingrese el tiempo estimado para realizar el servicio</td>
                <td>{servicio.Tiempo_Estimado}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={{
              pathname: "/VerServicios",
            }}
          >
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default detalleServicios;
