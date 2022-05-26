import React, { Component } from "react";

import "../../Css/Card.css";

import Carousel from "../Carousel";
import Tarjeta from "../Card";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/negociosall";
const cookies = new Cookies();

const token = cookies.get("token");

console.log(token);

class Base extends Component {
  state = {
    negocios: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url)
      .then((res) => {
        const info = res.data;
        console.log(info);
        this.setState({
          negocios: info,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    return (
      <div className="Inicio">
        <Carousel />
        <div className="Bienvenido">Bienvenidos</div>
        <div>
          {negocios.map((negocio, i) => (
            <Tarjeta
              key={i}
              Nombre={negocio.Nombre_Negocio}
              Descripicion={negocio.Descripcion_Del_Negocio}
              Proveedor={negocio.Usuario_Id}
              id={negocio.id}
            ></Tarjeta>
          ))}
        </div>
      </div>
    );
  }
}
export default Base;
