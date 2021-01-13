import React, { Component } from "react";
import { Modal, Button, Image } from 'react-bootstrap';

class RModal extends Component {
  render() {
    return (
      <Modal size="xl" show={this.props.show} onHide={() => this.props.onHide({ msg: 'Cross Icon Clicked!' })}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.mdata.title.replace(/(<([^>]+)>)/gi, "")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Image className="w-100" src={this.props.mdata.image} />
          <hr />
          {this.props.mdata.description}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'Modal Closed!' })} >Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default RModal;