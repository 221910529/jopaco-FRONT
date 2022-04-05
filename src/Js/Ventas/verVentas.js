import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";
import Excel from "./crearVenta";

let url = "http://127.0.0.1:8000/api/ventas";
const cookies = new Cookies();
const token = cookies.get("token");

class VerVentas extends React.Component {
  state = {
    ventas: [],
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
          ventas: info,
        });
      });
  }

  render() {
    const { ventas } = this.state;
    return (
      <div className="crud">
        <h1>Ver todos los ventas</h1>
        <br></br>
        <Excel></Excel>
        <br></br>
        <table className="table2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario relacionado</th>
              <th>Subventa relacionado</th>
              <th>Fecha de la venta</th>
              {/* <th>Ver detalle</th> */}
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{venta.Usuario_Id}</td>
                <td>{venta.SubServicio_Id}</td>
                <td>{venta.Fecha}</td>
                {/* <td>
                  <Link
                    to={{
                      pathname: "/Detalleventas",
                      state: { id: venta.id },
                    }}
                  >
                    <button className = "buttontables1">Ver detalle</button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerVentas;
