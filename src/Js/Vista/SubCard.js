import React, { Component } from "react";
import "../../Css/SubTarjeta.css";
import { Link } from "react-router-dom";

class Card extends Component {
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
              <div>Costo: {this.props.Costo}</div>
              <div>Tiempo: {this.props.Tiempo}</div>
              <div>
                <Link
                  to={{
                    pathname: this.props.direccion,
                    state: { id: this.props.id },
                  }}
                >
                  <button>Ver Servicio</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
