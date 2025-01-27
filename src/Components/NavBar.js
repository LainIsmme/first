import React from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

function Navigation() {
  return(
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link>Виды массажа</Nav.Link>
              <Nav.Link href="#pricelist">Прайс лист</Nav.Link>
              <Nav.Link href="contact">Запись</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation;