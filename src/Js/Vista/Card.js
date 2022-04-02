import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

let url = "http://127.0.0.1:8000/api/carrito";
const cookies = new Cookies();

const token = cookies.get("token");

const usuario = cookies.get("id");

class Card extends Component {
  //   <div>
  //   <button onClick={() => this.AgregarACarrito()}>
  //     Añadir al Carrito de compras
  //   </button>
  // </div>
  // Regresar para hacer esto pero de
  AgregarACarrito = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un usuario");
    } else {
      const form = new FormData();

      form.append("Servicio_Id", this.props.id);
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
          // setTimeout(function () {
          //   window.location = "/Usuarios";
          // }, 1000);
        })
        .catch(function (error) {
          console.log(error);
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
              <div>Proveedor: {this.props.Proveedor}</div>
            </div>
          </div>

          <div className="centrar">
            <div>
              <Link
                to={{
                  pathname: "/VerNegocio",
                  state: { id: this.props.id },
                }}
              >
                <button>Ver Negocio</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
