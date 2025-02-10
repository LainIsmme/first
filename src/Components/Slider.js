import React from "react";
import { Carousel } from "react-bootstrap"; 
import dLox from "../img/Lox.jpg";

const sliderData = [
  {
    image: dLox,
    name: "First",
    text: "Text",
  },
  {
    image: dLox,
    name: "Second",
    text: "Text",
  },
];

function Slider() {
  return (
    <Carousel>
      {sliderData.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.name}
          />
          <Carousel.Caption>
            <h1>{item.name}</h1>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;