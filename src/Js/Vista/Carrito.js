import React, { Component } from "react";
import "../../Css/Carrito.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Card from "./CardCarrito";

let url = "http://127.0.0.1:8000/api/carrito";

let url2 = "http://127.0.0.1:8000/api/subservicios";

const cookies = new Cookies();

const token = cookies.get("token");

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

        axios //---- mandamos solicitud post al backend
          .get(url2, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const info2 = res.data.data;
            const f = this.state.carrito;

            f.map((i) => {
              console.log(i);

              info2.map((inf) => {
                if (inf.id == i.SubServicio_Id)
                  return this.setState({
                    newserv: inf,
                  });
              });
            });
            //console.log(this.state.newserv);
          });

        //console.log(this.state.subservicios);
      });
  }

  render() {
    const { newserv } = this.state;
    return (
      <div className="margen">
        <div>
          <h1>Carrito de Compras</h1>
        </div>

        {newserv.map((sub, i) => (
          <Card
            key={i}
            Nombre={sub.Nombre}
            Descripicion={sub.Descripcion}
            Proveedor={sub.Usuario_Id}
            id={sub.id}
          ></Card>
        ))}
        <button>Comprar Todo el Carrito</button>
      </div>
    );
  }
}

export default Carrito;
