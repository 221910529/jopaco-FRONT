import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "http://127.0.0.1:8000/api/excel";
const cookies = new Cookies();

const token = cookies.get("token");

class Venta extends React.Component {
  state = {
    usuario: [],
    mensaje: "",
    url: "",
    downloadUrl: "",
  };

  GenerarTicket = () => {
    axios
      .get(
        url,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Ticket.xlsx");
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const downloadUrl = this.GenerarTicket();
    return <a href={downloadUrl}>{url}</a>;
  }
}

export default Venta;
