import React, { Component } from "react";
import "../../Css/SubTarjeta.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/carrito";
const cookies = new Cookies();

const token = cookies.get("token");

const usuario = cookies.get("id");

class SubCard extends Component {
  AgregarACarrito = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un usuario");
    } else {
      const form = new FormData();

      form.append("SubServicio_Id", this.props.id);
      form.append("Usuario_Id", usuario);

      await axios
        .post(url, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.success != null) {
            alert(response.data.success);
          }
          setTimeout(function () {
            window.location = "/Carrito";
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <div className="contenedor">
        <div className="subtarjeta">
          <div>
            {/* <img
              src={this.props.Nombre}
              alt="Imagen Negocio"
              width="80"
              height="80"
            ></img> */}
            <img
              src="https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Apertura-del-negocio-3000x2904.png"
              alt="Imagen Negocio"
              width="80"
              height="80"
            ></img>
          </div>
          <div className="subcentrar">
            <div className="marg">
              <h2>Nombre: {this.props.Nombre}</h2>
              <div>Descripicion: {this.props.Descripcion}</div>
              <div>Calificacion: {this.props.Calificacion}</div>
              <div>Precio: {this.props.Precio}</div>
              <div>
                <button onClick={() => this.AgregarACarrito()}>
                  Añadir al Carrito de compras
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubCard;
