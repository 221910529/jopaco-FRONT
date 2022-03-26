import React, { Component } from "react";
import "../Css/Inicio.css";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/usuarios";
const cookies = new Cookies();

const token = cookies.get("token");

class DetalleNegocio extends Component {
  render() {
    return (
      <div className="Inicio">
        <div className="Bienvenido">Bienvenidos</div>
        <div>Carrousel</div>
        <div>Cards</div>
      </div>
    );
  }
}

export default DetalleNegocio;
