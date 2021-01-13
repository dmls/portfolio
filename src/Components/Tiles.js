import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Tiles extends React.Component {
  render() {
    return (
      <Container fluid id={this.props.id} className="tiles">
        <Row>
          {this.props.items.map(function(item, index) {
            return (
              <Col sm={6} md={4}>
                <Row className="tileContainer">
                  <Col className="tile" style={{backgroundImage: 'url("' + item.image + '")'}}>
                    <div class="tileContent">
                      <div class="tileContentInner">
                        <span>{item.description}</span>
                        <a href={item.url}>
                          <h3>{item.title}</h3>
                        </a>
                      </div>
                    </div>
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