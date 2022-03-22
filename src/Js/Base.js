import React from "react";
import "../Css/Inicio.css";

import Carousel from "./Carousel";

export default function Base() {
  return (
    <div className="Inicio">
      <Carousel/>
      <div className="Bienvenido">Bienvenidos</div>
      <div>Carrousel</div>
      <div>Cards</div>
    </div>
  );
}
