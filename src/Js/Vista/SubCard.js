import React, { Component } from "react";
import "../../Css/SubTarjeta.css";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="subtarjeta">
          <div>
            <img
              src={"http://127.0.0.1:8000/img/" + this.props.Foto}
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
