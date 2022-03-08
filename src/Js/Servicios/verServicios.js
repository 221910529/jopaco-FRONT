import "../../Css/Crud.css";
import React from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

let url = "http://127.0.0.1:8000/api/servicios";
const cookies = new Cookies();

const token = cookies.get("token");

function VerServicios() {
  const [APIData, setAPIData] = useState([]);

  useEffect(async () => {
    await axios //---- mandamos solicitud post al backend
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div className="crud">
      <h1>Ver todos los servicios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Tiempo</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            <tr>
              <td>{data.id}</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

function Dato(props) {
  <tr>{props.name}</tr>;
}

export default VerServicios;
