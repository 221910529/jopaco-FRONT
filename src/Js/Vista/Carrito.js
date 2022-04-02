import React, { Component } from "react";
import "../../Css/Carrito.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Card from "./Card";

let url = "http://127.0.0.1:8000/api/favoritos";
const cookies = new Cookies();

const token = cookies.get("token");

class Carrito extends Component {
  state = {
    favoritos: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info = res.data.data;
        console.log(info);
        this.setState({
          favoritos: info,
        });
      });
  }

  render() {
    const { favoritos } = this.state;
    return (
      <div className="margen">
        <div>
          <h1>Carrito de Compras</h1>
        </div>

        {favoritos.map((negocio, i) => (
          <Card
            key={i}
            Nombre={negocio.Nombre_Negocio}
            Descripicion={negocio.Descripcion_Del_Negocio}
            Proveedor={negocio.Usuario_Id}
            id={negocio.id}
          ></Card>
        ))}
      </div>
    );
  }
}

export default Carrito;
