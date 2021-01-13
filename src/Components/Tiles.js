import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Tile from './Tile';

class Tiles extends React.Component {
  render() {
    return (
      <Container fluid id={this.props.id} className="tiles">
        <Row>
          {this.props.items.map(function(item, index) {
            return (
              <Tile item={item} />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Tiles;