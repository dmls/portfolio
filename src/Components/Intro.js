import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Intro extends React.Component {
  render() {
    return (
      <Container fluid id="intro" className="bg-blueDark text-center vh-100">
        <Row>
          <Col className="font-poppins-bg">WEB DEVELOPMENT</Col>
        </Row>

        <Row>
          <Col className="text-blue">Hello, my name is Dan</Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={8} className="text-white"><h1>Full-stack web developer from New York who helps agencies and businesses bring their ideas to life.</h1></Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;