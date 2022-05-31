import React, { Component } from "react";

import "../../Css/Card.css";

import Carousel from "../Carousel";
import Tarjeta from "../Card";
import Modal from "../Modal/Modal";

import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/negociosall";
const cookies = new Cookies();

const token = cookies.get("token");
const verificado = cookies.get("verificado");
const nombre = cookies.get("nombre");

console.log(verificado);

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
    if (verificado != null && verificado != 1) {
      return (
        <div className="Inicio">
          <Modal
            Titulo={"Hola " + nombre}
            Contenido="Por favor Verifica tu correo"
          ></Modal>
          <div className="Bienvenido">Bienvenidos</div>
          <Carousel />
          <div>
            {negocios.map((negocio, i) => (
              <Tarjeta
                key={i}
                Nombre={negocio.Nombre_Negocio}
                Imagen={"http://127.0.0.1:8000/img/" + negocio.Foto}
                Descripicion={negocio.Descripcion_Del_Negocio}
                Proveedor={negocio.Usuario_Id}
                id={negocio.id}
              ></Tarjeta>
            ))}
          </div>
        </div>
      );
    }
    if (verificado == 1 || verificado == null) {
      return (
        <div className="Inicio">
          <div className="Bienvenido">Bienvenidos</div>
          <Carousel />
          <div>
            {negocios.map((negocio, i) => (
              <Tarjeta
                key={i}
                Nombre={negocio.Nombre_Negocio}
                Imagen={"http://127.0.0.1:8000/img/" + negocio.Foto}
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
}
export default Base;
