import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="tarjeta">
          <div className="centrar">
            <img
              src={"http://127.0.0.1:8000/img/" + this.props.Foto}
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

          <div className="centrarIzquierda">
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
