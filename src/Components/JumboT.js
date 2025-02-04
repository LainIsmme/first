import React from "react";
import {
  Row,
  Col,
  Container
} from "react-bootstrap";
import dLox from "../img/Lox.jpg"

const textP = [
  "Эту сумку мне муж купил\nЭти Rolex'ы муж купил\nКольцо с бриллиантом мне муж купил\nМуж купил, мне муж купил",
  "Не завожу подруг, но за деньги — да\nЯ не делаю фиты даже за деньги, да\nИ я подумаю потом, но скажу сразу \"да\"\nЗа деньги — да, за деньги — да"
];


function Jumbo () {
  return (
    <Container>
      <Row>
        <Col
          md={ { span: 6, order: 1 }}
          xs={ { span: 6, order: 1 }}
          className="img-fluid"
          >
          <p>
            {textP[0]}
          </p>
        </Col>
        <Col
          md={ { span: 6, order: 2 }}
          xs={ { span: 6, order: 2 }}
          className="img-Column1"
          >
          <img src={dLox} alt="Dima Lox" className="img-fluid" />
      </Col>
    </Row>
    <Row>
      <Col
        md={ { span: 6, order: 1 }}
        xs={ { span: 6, order: 1 }}
        className="img-Column2"
        >
        <img src={dLox} alt="Dima Lox" className="img-fluid" />
    </Col>
    <Col
      md={ { span: 6, order: 2 }}
      xs={ { span: 6, order: 2 }}
      className="text-Column2"
      >
      <p>
        {textP[1]}
      </p>
    </Col>
  </Row>
</Container>
)
}

export default Jumbo;