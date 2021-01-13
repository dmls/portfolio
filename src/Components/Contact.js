import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import resume from '../assets/pdf/Dan-Morales-Resume.pdf';
import imgMap from '../assets/images/map.png';

class Contact extends React.Component {
  render() {
    return (
      <Container fluid id="contact" className="bg-blueDark">
        <Row className="py-5">
          <Col sm={12} md={6} className="align-middle mt-auto mb-auto text-white">
            <h1>Contact me</h1>
            <p>I'm interested in projects of any scale. Please get in touch.</p>
            <p>
              <FontAwesomeIcon className="mr-2" icon={faEnvelopeOpenText} />
              <a href="mailto:danmlsv@gmail.com">danmlsv@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon className="mr-2" icon={faFilePdf} />
              <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </p>
          </Col>

          <Col sm={12} md={6} className="text-center">
            <Image fluid src={imgMap} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;