import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Intro extends React.Component {
  render() {
    return (
      <Container fluid id="intro" className="intro bg-blueDark text-center vh-100">
        <Row className="d-none d-md-flex h-100">
          <Col style={{marginTop: 'auto', marginBottom: 'auto'}}><div className="font-poppins-bg" style={{marginTop: '-200px'}}>Webdev</div></Col>
        </Row>

        <Row className="h-100 position-absolute bgTextContent" style={{width: '100%'}}>
          <Col style={{marginTop: 'auto', marginBottom: 'auto'}} className="align-middle">
            <Row>
              <Col className="text-blue">
                <h2>Hello Everyone</h2>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col sm={8} className="text-white py-3">
                <h1>My name is Dan and I'm a full-stack web developer from New York who helps agencies and businesses bring their ideas to life.</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;