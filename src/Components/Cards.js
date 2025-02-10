import React, { useState } from "react";
import { Row, Col, Card, Container, Button, Form, Modal } from "react-bootstrap";

function Cards(props) {
  const [show, setShow] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const mClose = () => setShow(false);
  const mShow = (id) => {
    setSelectedCardId(id);
    setShow(true);
  };

  return (
    <>
      <Container>
        <Row>
          {props.cardsData.map((item, index) => (
            <Col key={index} className="text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img src={item.img} alt="card img" variant="top" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary">Подробнее</Button>
                    <Button variant="primary" onClick={() => mShow(item.id)}>
                      Записаться
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={mClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Запись</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="tel" placeholder="+7(123)456-78-90" />
            </Form>
            <Form>
              <Form.Label>Сообщение</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Здравствуйте! Я хочу узнать вопросы или записаться на..."
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={mClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={mClose}>
              Отправить
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Cards;