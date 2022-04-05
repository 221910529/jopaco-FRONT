import React, { Component } from "react";
import "../../Css/detalleU.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/subservicios/";
const cookies = new Cookies();

const token = cookies.get("token");

//---- desclarando la variables que ocupando
class detallesubservicios extends React.Component {
  state = {
    subservicio: [],
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
          subservicio: info,
        });
      });
  }

  render() {
    const { subservicio } = this.state;
    return (

      <><div className="Titulo">
        <h1>Detalle Subservicio {subservicio.Nombre}</h1>
      </div>
      <div className="formularioDU">

          <div className="Informacion">
          <table className="tablaInfor">
            <tbody>
            <tr>
              <td>Nombre del subservicio:</td>
              <td>{subservicio.Nombre} </td>
            </tr>
            <tr>
              <td>Descripcion:</td>
              <td>{subservicio.Descripcion}</td>
            </tr>
            <tr>
              <td>Calificacion:</td>
              <td>{subservicio.Calificacion}</td>
            </tr>
            <tr>
              <td>Precio:</td>
              <td>{subservicio.Precio}</td>
            </tr>
            <tr>
              <td>Servicio relacionado:</td>
              <td>{subservicio.Servicio_Id}</td>
            </tr>
            </tbody>
          </table>

          </div>
          <Link
                to={{
                  pathname: "/VerSubservicios",
                }}
              >
                <button className="boton">Regresar</button>
            </Link>
          <div>
          

          </div>

          
        </div></>
      
    );
  }
}

export default detallesubservicios;
