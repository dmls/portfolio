import React from 'react';
import { Col, Image } from 'react-bootstrap';

import SectionBgText from './SectionBgText';
import imgTech from '../assets/images/tech.png';

class Tech extends React.Component {
  render() {
    let content = (
      <>
        <Col sm={12} md={6} className="align-middle mt-auto mb-auto">
          <h1 className="pb-2">Technology Stack</h1>
          <p>PHP, JavaScript, HTML, and CSS on the web stack, Linux, Apache, MySQL, MongoDB on the server side.</p>
          <p>I can build applications from the ground up or using CMS frameworks like WordPress and Magento.</p>
        </Col>

        <Col sm={12} md={6} className="align-middle text-center mt-auto mb-auto">
          <Image fluid src={imgTech} />
        </Col>
      </>
    );

    return (
      <SectionBgText
        containerClasses="tech bg-blue text-white"
        bgText="Technology"
        content={content}
      />
    );
 }
}

export default Tech;