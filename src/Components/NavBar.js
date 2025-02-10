import React from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

function Navigation() {
  return(
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#Home">MyM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Главная</Nav.Link>
              <Nav.Link href="#VM" >Виды массажа</Nav.Link>
              <Nav.Link href="#pricelist">Прайс лист</Nav.Link>
              <Nav.Link href="#Contacts">Запись</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation;