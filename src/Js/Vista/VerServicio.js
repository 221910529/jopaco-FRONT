import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import SubCard from "./SubExtra";
import axios from "axios";
import Cookies from "universal-cookie";

let url = "http://127.0.0.1:8000/api/servicios/";
let url2 = "http://127.0.0.1:8000/api/subservicios";
const cookies = new Cookies();

const token = cookies.get("token");

class VerServicio extends Component {
  state = {
    servicios: [],
    subservicio: [],
    newserv: [],
  };

  componentDidMount() {
    axios //---- mandamos solicitud post al backend
      .get(url + this.props.location.state.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info = res.data;
        console.log(info);
        this.setState({
          servicios: info,
        });
      });

    axios //---- mandamos solicitud post al backend
      .get(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info = res.data.data;
        const idservicio = this.props.location.state.id;

        {
          info.map((inf) => {
            if (inf.Servicio_Id == idservicio)
              return this.setState({
                newserv: info,
              });
            return this.setState({
              newserv: [],
            });
          });
        }
        this.setState({
          subservicios: info,
        });
      });
  }

  render() {
    const { servicios } = this.state;
    const { newserv } = this.state;
    return (
      <div className="margen">
        <div className="column">
          <div className="contener">
            <img
              src={"http://127.0.0.1:8000/img/" + servicios.Foto}
              width="300"
              height="300"
              alt="Imagen"
            ></img>
            {/* <img
              src="https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Apertura-del-negocio-3000x2904.png"
              width="300"
              height="300"
              alt="Imagen"
            ></img> */}
            <div className="centrado">
              <h1>Servicio: {servicios.Nombre_Servicio}</h1>
            </div>
          </div>
          <div className="fila">
            <div className="text-centrar">
              Costo del servicio: {servicios.Costo}
            </div>
            <div className="text-centrar">
              Tiempo Estimado del servicio: {servicios.Tiempo_Estimado}
            </div>
          </div>
        </div>
        {/* <div className="Busqueda">
          <div className="columnas">
            Buscar por Categoria
            <div>
              <select name="" id="">
                <option value="">Seleccione una categoria</option>
              </select>
            </div>
          </div>

          <div className="columnas">
            Disponibilidad
            <div>
              <input type="radio" name="" id=""></input>No disponible
              <input type="radio" name="" id=""></input>Disponible
            </div>
          </div>
        </div> */}
        <div className="SubCardContenedor">
          {newserv.map((subservicios, i) => (
            <SubCard
              key={i}
              Nombre={subservicios.Nombre}
              Descripcion={subservicios.Descripcion}
              Calificacion={subservicios.Calificacion}
              Precio={subservicios.Precio}
              direccion="/"
              id={subservicios.id}
            ></SubCard>
          ))}
        </div>
      </div>
    );
  }
}

export default VerServicio;
