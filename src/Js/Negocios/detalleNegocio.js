import React, { Component } from "react";
import "../../Css/DetalleN.css";
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
      <><div className="TituloDN">
      <h1>Detalle: {negocio.Nombre_Negocio}</h1>
      </div>
      <div className="formularioDN">
        
        <div className="Informacion">
        <div className="Foto2">
                <td>Foto del negocio</td>
                <td>
                  <img
                    src={"http://127.0.0.1:8000/img/" + negocio.Foto}
                    alt="Negocio" width="145px" height="145px"
                  ></img>
                </td>
                </div>
          <table>
            <tbody>
              
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
          
        </div>
      </div>
      <div className="formularioDN2">
        <div>
        <Link
            to={{
              pathname: "/VerNegocios",
            }}
          >
            <button className="botonR">Regresar</button>
          </Link>
          </div>
        </div></>
    );
  }
}

export default detalleNegocio;
