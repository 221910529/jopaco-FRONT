import React, { Component } from "react";
import "../../Css/Formularios.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/negocios/";
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
        console.log(res);
        const info = res.data;
        console.log(info);
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
          <h1>Detalle negocio {negocio.Nombre_Negocio}</h1>
          <table>
            <tbody>
              <tr>
                <td>Foto del negocio</td>
                <td>
                  <img
                    src={"http://127.0.0.1:8000/img/" + negocio.Foto}
                    alt="Negocio"
                  ></img>
                </td>
              </tr>
              <tr>
                <td>Nombre del negocio</td>
                <td>{negocio.Nombre_Negocio}</td>
              </tr>
              <tr>
                <td>Horario del servicio del negocio</td>
                <td>{negocio.Horario_Servicio}</td>
              </tr>
              <tr>
                <td>Dias de servicio del negocio</td>
                <td>{negocio.Dias_Servicio}</td>
              </tr>
              <tr>
                <td>Descripcion del negocio</td>
                <td>{negocio.Descripcion_Del_Negocio}</td>
              </tr>
              <tr>
                <td>Direccion asociado</td>
                <td>{negocio.Direccion}</td>
              </tr>
              <tr>
                <td>Usuario asociado</td>
                <td>{negocio.Usuario_Id}</td>
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
              pathname: "/VerNegocios",
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
