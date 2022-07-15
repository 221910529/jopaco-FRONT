import React, { Component } from "react";
import "../../Css/Carrito.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Card from "./CardCarrito";
import { Link } from "react-router-dom";

let url = "https://back.jopaco.online/api/carrito";

let url2 = "https://back.jopaco.online/api/subservicios";

let url3 = "https://back.jopaco.online/api/ventas";

const cookies = new Cookies();

const token = cookies.get("token");
const id = cookies.get("id");

var ciclo;
var casisub;
var arreglo = [];
var total = 0;

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
var newdate = 0;

if (month < 10) {
  newdate = `${year}-0${month}-${day}`;
} else {
  newdate = `${year}-${month}-${day}`;
}

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
          axios
            .get(url2, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response2) => {
              const info2 = response2.data.data;

              this.setState({
                subservicios: info2,
              });

              casisub = this.state.subservicios;

              casisub.map((sub) => {
                if (sub.id == car.SubServicio_Id) {
                  arreglo.push(sub);
                }
              });
              this.setState({
                newserv: arreglo,
              });
              console.log(this.state.newserv);
              //crear un array;
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      });
  }

  crearVenta = async () => {
    if (token == undefined) {
      alert("Necesita Iniciar sesion para registrar un usuario");
    } else {
      await axios
        .post(
          url3,
          { Fecha: newdate, Usuario_Id: id, Total: total },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          alert(response.data.success);
          setTimeout(function () {
            window.location = "/";
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  render() {
    const { newserv, carrito } = this.state;
    return (
      <div className="margen">
        <div>
          <h1>Carrito de Compras</h1>
        </div>

        {newserv.map(
          (sub, i) => (
            (total = total + parseInt(sub.Precio)),
            (
              <div>
                <Card
                  key={i}
                  Nombre={sub.Nombre}
                  Descripicion={sub.Descripcion}
                  Proveedor={sub.Servicio_Id}
                  Precio={sub.Precio}
                  id={sub.id}
                ></Card>
              </div>
            )
          )
        )}

        <div className="margen"> El total es:{total}</div>

        <div className="margen">
          <a onClick={() => this.crearVenta()}>
            <button className="boton">Comprar Todo el Carrito</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Carrito;
