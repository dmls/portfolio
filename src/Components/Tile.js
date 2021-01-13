import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RModal from './RModal';

class Tile extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }

  handleClose = (fromModal) => {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <>
        {/* Tile */}
        <Col sm={6} md={4}>
          <Row className="tileContainer" onClick={this.handleShow}>
            <Col className="tile" style={{ backgroundImage: 'url("' + this.props.item.image + '")' }}>
              <div class="tileContent">
                <div class="tileContentInner">
                  <span>{this.props.item.subtitle}</span>
                  <a href={this.props.item.url}>
                    <h3 dangerouslySetInnerHTML={{__html: this.props.item.title}}></h3>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Modal */}
        <RModal 
          mdata={this.props.item} 
          show={this.state.show} 
          onClick={this.handleClose}
          onHide={this.handleClose}
        />
      </>
    );
  }
}

export default Tile;