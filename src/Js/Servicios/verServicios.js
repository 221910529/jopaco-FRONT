import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Component } from "react";

let url = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();

const token = cookies.get("token");

class VerServicios extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const serviciosGet = res.data.data;
        this.setState({
          data: serviciosGet,
        });
        console.log(serviciosGet);
      });
  }

  Eliminar(props) {
    axios
      .delete(
        url,
        {
          data: {
            id: 1,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const serviciosGet = res.data.data;
        this.setState({
          data: serviciosGet,
        });
        console.log(serviciosGet);
      });
  }

  render() {
    return (
      <div className="crud">
        <h1>Ver todos los servicios</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Tiempo</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((servicio) => {
              return (
                <tr>
                  <td>{servicio.Nombre_Servicio}</td>
                  <td>{servicio.Costo}</td>
                  <td>{servicio.Tiempo_Estimado}</td>
                  <td>
                    <button>Modificar</button>
                  </td>
                  <td>
                    <button onClick={this.Eliminar(servicio.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerServicios;
