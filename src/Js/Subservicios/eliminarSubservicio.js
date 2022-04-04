import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/subservicios/";
const cookies = new Cookies();

const token = cookies.get("token");

class EliminarSubservicios extends React.Component {
  state = {
    subservicio: [],
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
          subservicio: info,
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
          window.location = "/Versubservicio";
        }, 1000);
      });
  }
  render() {
    const { subservicio, mensaje } = this.state;
    return (
      <div className="formulario">
        <div>
          <h1>El subservicio {subservicio.Nombre} se eliminara</h1>

          {mensaje ? <h3>{mensaje}</h3> : <div></div>}

          <table className="table3">
            <tbody>
              <tr>
                <td>Nombre de subservicio</td>
                <td>{subservicio.Nombre}</td>
              </tr>
              <tr>
                <td>Descripción</td>
                <td>{subservicio.Descripcion}</td>
              </tr>
              <tr>
                <td>Calificación</td>
                <td>{subservicio.Calificacion}</td>
              </tr>
              <tr>
                <td>Servicio vinculado</td>
                <td>{subservicio.Servicio_Id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EliminarSubservicios;
