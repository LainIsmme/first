import React from "react";
import {
  Row,
  Col,
  Container
} from "react-bootstrap";
import dLox from "../img/Lox.jpg"


const jumboData = [{
  text: "Эту сумку мне муж купил\nЭти Rolex'ы муж купил\nКольцо с бриллиантом мне муж купил\nМуж купил, мне муж купил",
  img: dLox
},

  {
    text: "Эту сумку мне муж купил\nЭти Rolex'ы муж купил\nКольцо с бриллиантом мне муж купил\nМуж купил, мне муж купил",
    img: dLox
  }]


function Jumbo () {
  return (
    <Container>
      {jumboData.map((item, i) => {
        return (i + 1) % 2 === 0 ?
        <Row>
          <Col
            className="img-fluid"
            >
            <p>
              {item.text}
            </p>
          </Col>
          <Col
            className="img-Column"
            >
            <img src={item.img} alt="Dima Lox" className="img-fluid" />
        </Col>
      </Row>
      :
        <Row>
          <Col
            className="img-Column"
            >
            <img src={item.img} alt="Dima Lox" className="img-fluid" />
        </Col>
        <Col
          className="text-Column2"
          >
          <p>
            {item.text}
          </p>
        </Col>
      </Row>;
    })}
</Container>
)
}

export default Jumbo;