import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

let url = "https://back.jopaco.online/api/carrito/";

const cookies = new Cookies();

const token = cookies.get("token");
class Card extends Component {
  EliminarDelCarrito = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un usuario");
    } else {
      axios //---- mandamos solicitud post al backend
        .delete(url + this.props.id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          var respuesta = res.data.success;
          console.log(respuesta);
          alert(respuesta);

          setTimeout(function () {
            window.location = "/Carrito";
          }, 1000);
        });
    }
  };

  render() {
    return (
      <div className="contenedor">
        <div className="tarjeta">
          <div className="centrar">
            <img
              src="https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Apertura-del-negocio-3000x2904.png"
              alt="Imagen Negocio"
              width="80"
              height="80"
            ></img>
            <div className="marg">
              <h2>Nombre: {this.props.Nombre}</h2>
              <div>Descripcion: {this.props.Descripicion}</div>
              <div>Precio: {this.props.Precio}</div>
              <div>Proveedor: {this.props.Proveedor}</div>
            </div>
          </div>

          <div className="centrarIzquierda">
            <div>
              <button onClick={() => this.EliminarDelCarrito()}>
                Eliminar del Carrito de compras
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
