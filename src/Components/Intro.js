import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionBgText from './SectionBgText';

class Intro extends React.Component {
  render() {
    let copy = 'My name is Dan and I\'m a full-stack developer from New York who helps agencies and businesses bring their ideas to life.';

    let content = (
      <Col className="align-middle mt-auto mb-auto">
        <Row>
          <Col className="text-blue">
            <h2>Hello Everyone</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={8} className="text-white py-3">
            <h1 className="d-none d-lg-block">{copy}</h1>

            <h3 className="d-block d-lg-none">{copy}</h3>
          </Col>
        </Row>
      </Col>
    );

    return (
      <SectionBgText 
        id="intro"
        containerClasses="intro bg-blueDark text-center vh-100"
        bgText="full stack"
        content={content}
      />
    );
  }
}

export default Intro;
