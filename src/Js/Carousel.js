import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Css/Carousel.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <p>
            Somos una empresa dedicada a la promocion de servicios cercanos a tu
            comunidad
          </p>
          <img src="https://st2.depositphotos.com/6672578/10090/i/600/depositphotos_100906810-stock-photo-craftsman-cutting-plank-with-circular.jpg" />
        </div>
        <div>
          <h2> Misión </h2>
          <p>
            Buscamos fomentar, proveer, y servir a nuestro mundo, siendo una
            empresa altamente productiva y plenamente humana. Lo más importante
            para la empresa es su mundo de consumidores que ve como jefes, y
            clientes que ve como socios.
          </p>
          <img src="https://media-adsa.camilyo.software/media-adsa/static/3698/859.jpg" />
        </div>
        <div>
          <h2> Vision </h2>
          <p>
            Ser líder internacional en la búsqueda de servicios de calidad
            dentro de la comunidad en donde se encuentran la mayoría de estos
            servicios.
          </p>
          <img src="https://www.ula.edu.mx/images/modalidades/presencial/licenciaturas/ula_licenciatura_dentista_tradicional.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
