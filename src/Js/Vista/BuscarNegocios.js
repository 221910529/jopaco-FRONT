import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Card from "./Card";

let url = "http://127.0.0.1:8000/api/negocios";
const cookies = new Cookies();

const token = cookies.get("token");

class BuscarNegocio extends Component {
  state = {
    negocios: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info = res.data.data;
        console.log(info);
        this.setState({
          negocios: info,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    return (
      <div className="margen">
        <div>
          <h1>Buscar un negocio</h1>
        </div>
        <div className="Busqueda">
          <div className="columnas">
            Buscar por nombre
            <div>
              <input type="text" name="" id=""></input>
            </div>
          </div>
          <div className="columnas">
            Buscar por nombre
            <div>
              <input type="text" name="" id=""></input>
            </div>
          </div>
          <div className="columnas">
            Buscar por nombre
            <div>
              <input type="text" name="" id=""></input>
            </div>
          </div>
        </div>
        {negocios.map((negocio, i) => (
          <Card
            key={i}
            Nombre={negocio.Nombre_Negocio}
            Descripicion={negocio.Descripcion_Del_Negocio}
            Proveedor={negocio.Usuario_Id}
            id={negocio.id}
          ></Card>
        ))}
      </div>
    );
  }
}

export default BuscarNegocio;
