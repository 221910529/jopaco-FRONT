import React, { Component } from "react";
import "../../Css/Carrito.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Card from "./CardCarrito";
import { Link } from "react-router-dom";

let url = "http://127.0.0.1:8000/api/carrito";

let url2 = "http://127.0.0.1:8000/api/carrito/";

const cookies = new Cookies();

const token = cookies.get("token");

var ciclo;
class Carrito extends Component {
  state = {
    carrito: [],
    subservicios: [],
    newserv: [],
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
        //console.log(info);
        this.setState({
          carrito: info,
        });
        ciclo = this.state.carrito;

        ciclo.map((car) => {
          axios //---- mandamos solicitud post al backend
            .put(
              url2 + car.SubServicio_Id,
              {
                id: this.state.Nombre,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              const info = response.data;
              this.setState({
                newserv: info,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      });
  }

  render() {
    const { newserv, carrito } = this.state;
    return (
      <div className="margen">
        <div>
          <h1>Carrito de Compras</h1>
        </div>

        {newserv.map((sub, i) => (
          <div>
            <Card
              key={i}
              Nombre={sub.Nombre}
              Descripicion={sub.Descripcion}
              Proveedor={sub.Servicio_Id}
              id={sub.id}
            ></Card>
          </div>
        ))}
        <Link to="/GenerarVenta">
          <button>Comprar</button>
        </Link>
      </div>
    );
  }
}

export default Carrito;
