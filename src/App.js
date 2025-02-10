import React from "react"
import Navigation from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from "./Components/JumboT";
import Cards from "./Components/Cards";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Image
} from "react-bootstrap";
import dLox from "./img/Lox.jpg";
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"
import Header from "./Components/Headers"
import Contacts from "./Components/Contacts";

const cardsData = [{
  id: 1,
  title: "1",
  text: "text",
  img: dLox
}, {
  id: 2,
  title: "2",
  text: "text",
  img: dLox
}, {
  id: 3,
  title: "3",
  text: "text",
  img: dLox
}];

function App() {
  return (
    <>
      <Navigation />
      <Slider />
        <Header text="Главная" id="Home"/>
      <Jumbo />
      <Header text="Виды массажа" id="VM" />
      <Cards cardsData={cardsData} />
      <Header text="Запись" id="Contacts" />
      <Contacts />
      <Footer />
    </>
  )
}

export default App;