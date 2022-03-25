import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

let url = "http://127.0.0.1:8000/api/usuarios";
const cookies = new Cookies();

const token = cookies.get("token");

class Card extends Component {
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
            <div>
              <button>Añadir a Favoritos</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
