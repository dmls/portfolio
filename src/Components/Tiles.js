import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Tiles extends React.Component {
  render() {
    return (
      <Container fluid className="tiles">
        <Row>
          {this.props.items.map(function(item, index) {
            return (
              <Col sm={4}>
                <Row className="tileContainer">
                  <Col className="tile" style={{backgroundImage: 'url("' + item.image + '")'}}>
                    <a href={item.url}>
                    </a>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Tiles;