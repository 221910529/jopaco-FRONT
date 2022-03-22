import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                carpinteria
                    <img src="https://st2.depositphotos.com/6672578/10090/i/600/depositphotos_100906810-stock-photo-craftsman-cutting-plank-with-circular.jpg" width="500" height="500" />
                </div>
                <div>
                Plomeria
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.albaniles.org%2Fhogar%2Fdetalles-a-tener-en-cuenta-antes-de-comenzar-un-trabajo-de-plomeria%2F&psig=AOvVaw0s6jGdWQgkJV51RTIjXDO-&ust=1648076665544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCroo3q2vYCFQAAAAAdAAAAABAD" />
                </div>
                <div>
                Desntista
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.albaniles.org%2Fhogar%2Fdetalles-a-tener-en-cuenta-antes-de-comenzar-un-trabajo-de-plomeria%2F&psig=AOvVaw0s6jGdWQgkJV51RTIjXDO-&ust=1648076665544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCroo3q2vYCFQAAAAAdAAAAABAD" />
                </div>
            </Carousel>
        </div>
    );
}

