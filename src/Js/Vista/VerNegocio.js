import React, { Component } from "react";
import "../../Css/BuscarNegocio.css";
import axios from "axios";
import Cookies from "universal-cookie";
import SubCard from "./SubCard";

let url = "http://127.0.0.1:8000/api/negocios/";
let url2 = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();

const token = cookies.get("token");

class VerNegocio extends Component {
  state = {
    negocios: [],
    servicios: [],
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
        const info2 = res.data;
        console.log(info2);
        this.setState({
          servicios: info2,
        });
      });
  }

  render() {
    const { negocios } = this.state;
    return (
      <div className="margen">
        <div className="column">
          <div className="contener">
            <img
              src="https://www.liderdelemprendimiento.com/wp-content/uploads/2021/04/Apertura-del-negocio-3000x2904.png"
              width="300"
              height="300"
              alt="Imagen"
            ></img>
            <div className="centrado">
              <h1>Negocio: {negocios.Nombre_Negocio}</h1>
            </div>
          </div>
          <div className="fila">
            <div className="text-centrar">
              Descripicion del negocio: {negocios.Descripcion_Del_Negocio}
            </div>
            <div className="text-centrar">
              Dirrecion del negocio: {negocios.Direccion}
            </div>
            <div className="text-centrar">
              Dias que se atiende: {negocios.Dias_Servicio}
            </div>
            <div className="text-centrar">
              Horario de servicio del negocio:{negocios.Horario_Servicio}
            </div>
          </div>
        </div>
        <div className="Busqueda">
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
        </div>
        <SubCard></SubCard>
      </div>
    );
  }
}

export default VerNegocio;
