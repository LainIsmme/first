import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Button
} from "react-bootstrap";
import dLox from "../img/Lox.jpg";

function Cards () {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img src={dLox} alt="Dima Lox" variant="top"></Card.Img>
              <Card.Body>
                <Card.Title>Название</Card.Title>
                <Card.Text>Краткое описание вида массажа.</Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img src={dLox} alt="Dima Lox" variant="top"></Card.Img>
              <Card.Body>
                <Card.Title>Название</Card.Title>
                <Card.Text>Краткое описание вида массажа.</Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;