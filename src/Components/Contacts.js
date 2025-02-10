import React from "react";
import {Row, Col, Container} from "react-bootstrap";

function Contacts () {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={12}><p>Телефон: <br />+79995554433</p></Col>
        <Col xs={12}><p>Электронная почта: <br />aaabbbccc@mail.m</p></Col>
        <Col xs={12}><p>Часы работы: <br />с 10:00 до 22:00</p></Col>
      </Row>
    </Container>
  )
}

export default Contacts;