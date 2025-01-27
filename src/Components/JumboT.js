import React from "React";
import {
  Row,
  Col,
  Container
} from "react-bootstrap";

function jumbo () {
  return (
  <Container>
    <Row>
      <Col>
        <Text 
        md={{ span: 6, order: 2}}
        xs={{ span: 12, order: 1}}
        className="text-Column"
        >
          {p1.text}
        </Text>
      </Col>
      <Col>
        <image />
      </Col>
    </Row>
    <Row>
      <Col>
        <Text>
          <image />
        </Text>
      </Col>
      <Col>
        <Text>
          {p2.text}
        </Text>
      </Col>
    </Row>
  </Container>
  )
}

export default jumbo;