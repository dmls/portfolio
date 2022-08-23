import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import SectionBgText from './SectionBgText';
import imgTech from '../assets/images/tech.png';

class Tech extends React.Component {
  render() {
    let content = (
      <>
        <Col sm={12} md={6} className="align-middle mt-auto mb-auto">
          <h1 className="pb-2">
            Tech<span className="d-none d-lg-inline-block">nology</span> Stack
            <FontAwesomeIcon className="ml-2" icon={faCode} />
          </h1>
          <p>PHP, JavaScript, HTML, and CSS on the application side, Linux, Apache, MySQL, MongoDB on the back end.</p>
          <p>I can build applications from the ground up or using CMS frameworks like WordPress and Magento.</p>
        </Col>

        <Col sm={12} md={6} className="align-middle text-center mt-auto mb-auto">
          <Image fluid src={imgTech} />
        </Col>
      </>
    );

    return (
      <SectionBgText
        id="tech"
        containerClasses="tech bg-blue text-white"
        bgText="Technology"
        content={content}
      />
    );
 }
}

export default Tech;