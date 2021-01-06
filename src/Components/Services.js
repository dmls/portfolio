import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionBgText from './SectionBgText';

import imgCube from '../assets/images/icons/cube.svg';
import imgLayers from '../assets/images/icons/layers.svg';
import imgPaper from '../assets/images/icons/paper.svg';

class Services extends React.Component {
  render() {
    let items = [{
      icon: imgCube,
      title: 'Backend',
      text: 'Building data structures, APIs, and CMSes to ensure that all of your important backend business logic fires every time without a hitch.'
    }, {
      icon: imgLayers,
      title: 'Frontend',
      text: 'Using modern frontend technologies to create beautiful and responsive web applications that will look great on any device.'
    }, {
      icon: imgPaper,
      title: 'Devops',
      text: 'Spinning up reliable web servers, databases, and load balancers that will respond quickly to site requests for all of your users.'
    }];

    let content = (
      <Col className="align-middle pt-5 mt-auto mb-auto">
        <Container>
          <Row>
            {items.map(function(item, index) {
              return (
                <Col sm={12} md={4} className="my-4">
                  <Row className="mb-4">
                    <Col>
                    <img src={item.icon} alt={item.title + ' icon'} />
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col>
                      <h4>{item.title}</h4>  
                    </Col>
                  </Row>

                  <Row>
                    <Col>{item.text}</Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Col>
    );

    return (
      <SectionBgText
        containerClasses="vh-50"
        lightBg={true}
        bgText="Services"
        content={content}
      />
    );
  }
}

export default Services;