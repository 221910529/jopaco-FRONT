import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "https://back.jopaco.online/api/servicios/";
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
          <table className="table2">
            <tbody>
              <tr>
                <th>Campo</th>
                <th>Dato</th>
              </tr>
              <tr>
                <td>El costo estandar del servicio</td>
                <td>{servicio.Costo}</td>
              </tr>
              <tr>
                <td>El tiempo estimado para realizar el servicio</td>
                <td>{servicio.Tiempo_Estimado}</td>
              </tr>
              <tr>
                <td>Foto</td>
                <td>
                  <img
                    src={"https://back.jopaco.online/img/" + servicio.Foto}
                    width="150"
                    heigth="150"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Link
            to={{
              pathname: "/VerServicios",
            }}
          >
            <button className="boton">Regresar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default detalleServicios;
