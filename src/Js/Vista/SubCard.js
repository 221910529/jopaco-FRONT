import React, { Component } from "react";
import "../../Css/SubTarjeta.css";

class Card extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="subtarjeta">
          <div>
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
              <div>Descripcion: {this.props.Descripicion}</div>
              <div>Proveedor: {this.props.Proveedor}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
