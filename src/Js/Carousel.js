import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Css/Carousel.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="https://st2.depositphotos.com/6672578/10090/i/600/depositphotos_100906810-stock-photo-craftsman-cutting-plank-with-circular.jpg" />
        </div>
        <div>
          <img src="https://media-adsa.camilyo.software/media-adsa/static/3698/859.jpg" />
        </div>
        <div>
          <img src="https://www.ula.edu.mx/images/modalidades/presencial/licenciaturas/ula_licenciatura_dentista_tradicional.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
