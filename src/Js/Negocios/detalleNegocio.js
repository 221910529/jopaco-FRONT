import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/negocio/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class detalleNegocio extends React.Component {
  state = {
    negocio: [],
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
  }

  render() {
    const { negocio } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>Detalle negocio {negocio.Nombre_negocio}</h1>
          <table>
            <tbody>
              <tr>
                <td>Nombre del negocio</td>
                <td>{negocio.Apellido_Paterno} {negocio.Apellido_Materno} {negocio.Nombre} </td>
              </tr>
              <tr>
                <td>Fecha de Nacimiento</td>
                <td>{negocio.Fecha_Nacimiento}</td>
              </tr>
              <tr>
                <td>negocio asociado</td>
                <td>{negocio.Tipo_negocio}</td>
              </tr>
              <tr>
                <td>Correo electronico</td>
                <td>{negocio.Email}</td>
              </tr>
              {/* revisar la sintaxis para consultar una foto */}
              {/* <tr>
                <td>Fecha de Nacimiento</td>
                <td>{negocio.Foto}</td>
              </tr> */}
            </tbody>
          </table>
          <Link
            to={{
              pathname: "/Vernegocio",
            }}
          >
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default detalleNegocio;
