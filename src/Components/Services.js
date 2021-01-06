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
      text: 'Deserunt proident exercitation in in veniam enim ad qui consequat. Eu ex ipsum esse consectetur sint esse tempor velit amet dolor nostrud. Exercitation irure aliqua ea est ut.'
    }, {
      icon: imgLayers,
      title: 'Frontend',
      text: 'Deserunt proident exercitation in in veniam enim ad qui consequat. Eu ex ipsum esse consectetur sint esse tempor velit amet dolor nostrud. Exercitation irure aliqua ea est ut.'
    }, {
      icon: imgPaper,
      title: 'Devops',
      text: 'Deserunt proident exercitation in in veniam enim ad qui consequat. Eu ex ipsum esse consectetur sint esse tempor velit amet dolor nostrud. Exercitation irure aliqua ea est ut.'
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