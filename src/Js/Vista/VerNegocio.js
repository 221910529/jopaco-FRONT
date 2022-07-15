import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import axios from "axios";
import Cookies from "universal-cookie";
import SubCard from "./SubCard";

let url = "https://back.jopaco.online/api/negocios/";
let url2 = "https://back.jopaco.online/api/servicios";
const cookies = new Cookies();

const token = cookies.get("token");

class VerNegocio extends Component {
  state = {
    negocios: [],
    servicios: [],
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
        this.setState({
          negocios: info,
        });
      });

    axios //---- mandamos solicitud post al backend
      .get(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const info2 = res.data.data;
        const idnegocio = this.props.location.state.id;

        {
          info2.map((inf) => {
            if (inf.Negocio_Id == idnegocio)
              return this.setState({
                newserv: info2,
              });
            return this.setState({
              newserv: [],
            });
          });
        }

        console.log(this.state.newserv);

        this.setState({
          servicios: info2,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    const { newserv } = this.state;
    return (
      <>
        <div className="centrado">
          <h1>Negocio: {negocios.Nombre_Negocio}</h1>
        </div>
        <div className="margen">
          <div className="column">
            <div className="contener">
              <img
                src={"https://back.jopaco.online/img/" + negocios.Foto}
                width="300"
                height="300"
                alt="Imagen"
              ></img>
            </div>
            <div className="fila">
              <div className="text-centrar">
                Descripicion del negocio: {negocios.Descripcion_Del_Negocio}
              </div>
              <div className="text-centrar">
                Direcion del negocio: {negocios.Direccion}
              </div>
              <div className="text-centrar">
                Dias que se atiende: {negocios.Dias_Servicio}
              </div>
              <div className="text-centrar">
                Horario de servicio del negocio:{negocios.Horario_Servicio}
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
            {newserv.map((servicios, i) => (
              <SubCard
                key={i}
                Foto={servicios.Foto}
                Nombre={servicios.Nombre_Servicio}
                Costo={servicios.Costo}
                Tiempo={servicios.Tiempo_Estimado}
                id={servicios.id}
                direccion="/VerServicio"
              ></SubCard>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default VerNegocio;
