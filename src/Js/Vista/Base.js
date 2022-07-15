import React, { Component } from "react";

import EmpresaImg from "../../empresa.jpg";

import "../../Css/Card.css";
import "../../Css/Base.css";

import Carousel from "../Carousel";
import Tarjeta from "../Card";
import Modal from "../Modal/Modal";

import axios from "axios";
import Cookies from "universal-cookie";

let url = "https://back.jopaco.online/api/negociosall";
const cookies = new Cookies();

const token = cookies.get("token");
let verificado = cookies.get("verificado");
const nombre = cookies.get("nombre");
const id = cookies.get("id");

let url2 = "https://back.jopaco.online/api/list";

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

    axios
      .post(url2, {
        ID: id,
      })
      .then((response) => {
        console.log(response);
        let nuevo = response.data;
        console.log(nuevo);
        this.setState({
          verificado: nuevo.confirmed,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    const { verificado } = this.state;
    if (verificado != null && verificado != 1) {
      return (
        <div className="Inicio">
          <Modal
            Titulo={"Hola " + nombre}
            Contenido="Por favor verifica tu correo"
          ></Modal>
          <div className="Bienvenido">Bienvenidos</div>
          <Carousel />
          <div>
            {negocios.map((negocio, i) => (
              <Tarjeta
                key={i}
                Nombre={negocio.Nombre_Negocio}
                Imagen={"https://back.jopaco.online/img/" + negocio.Foto}
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
                Imagen={"https://back.jopaco.online/img/" + negocio.Foto}
                Descripicion={negocio.Descripcion_Del_Negocio}
                Proveedor={negocio.Usuario_Id}
                id={negocio.id}
              ></Tarjeta>
            ))}
          </div>

          <div className="pafderecho">
            <div>
              <img src={EmpresaImg} className="imgresponsive"></img>
            </div>
            <div className="pad fondo">
              <p>
                Somos una empresa dedicada a la promocion de servicios cercanos
                a tu comunidad
              </p>
            </div>
          </div>

          <div className="pad">
            <div className="pad">
              <h1> Misión </h1>
            </div>
            <div className="pad">
              <p>
                Buscamos fomentar, proveer, y servir a nuestro mundo, siendo una
                empresa altamente productiva y plenamente humana. Lo más
                importante para la empresa es su mundo de consumidores que ve
                como jefes, y clientes que ve como socios.
              </p>
            </div>
          </div>

          <div className="pad">
            <div className="pad">
              <p>
                Ser líder internacional en la búsqueda de servicios de calidad
                dentro de la comunidad en donde se encuentran la mayoría de
                estos servicios.
              </p>
            </div>
            <div className="pad">
              <h1> Vision </h1>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Base;
