import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class SectionBgText extends React.Component {
  render() {
    return (
      <Container fluid id={this.props.id || ''} className={'secBgText position-relative ' + this.props.containerClasses}>
        <Row className="d-none d-md-flex h-100">
          <Col className="mt-auto mb-auto">
            <div className={'font-poppins-bg secBgTextBgText ' + (this.props.lightBg ? 'secBgTextLightBg' : '')}>{this.props.bgText}</div>
          </Col>
        </Row>

        <Row className="h-100 position-absolute secBgTextContent w-100">
          {this.props.content}
        </Row>
      </Container>
    );
  }
}

export default SectionBgText;