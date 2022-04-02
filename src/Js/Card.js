import React, { Component } from "react";
import "../Css/Card.css";
import ImagenLogo from "../logo.png";
import axios from "axios";
import Cookies from "universal-cookie";



class Tarjeta extends Component {
  
  
  render() {
    
    return (
      <div className="card">
        <div className="card-logo">
          <img src={this.props.Imagen} width="100" background=""/>
        </div>
        <div className="card-contenido">
              <h2>Nombre: {this.props.Nombre}</h2>
        
        </div>
      </div>
    );
  }
}

export default Tarjeta;
