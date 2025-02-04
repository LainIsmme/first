import React from "react"
import Navigation from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from "./Components/JumboT";
import Cards from "./Components/Cards";
import { Row, Col, Card, Container, Button
} from "react-bootstrap";
import dLox from "./img/Lox.jpg";

function App() {
  return (
    <>
      <Navigation />;
      <Jumbo />;
      <Cards />;
    </>
  )
}

export default App;
