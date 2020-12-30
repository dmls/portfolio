import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo-white.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.navItems = [{
      label: 'Home',
      url: '#intro'
    }, {
      label: 'Work',
      url: '#work'
    }, {
      label: 'Tech',
      url: '#tech'
    }, {
      label: 'Contact',
      url: '#contact'
    }];
  }

  render() {
    return (
      <Container fluid className="bg-blueDark position-fixed py-4">
        <Row className="mx-5">
          <Col sm={12} md={6}>
            <Row>
              <Col sm={2}>
                <img class="img-fluid" src={logo} alt="DM Logo" />
              </Col>
            </Row>
          </Col>
          
          <Col sm={12} md={6}>
            <div className="float-right mt-4">
              {this.navItems.map(function(item, index) {
                return (
                  <a className="ml-3 text-white font-weight-bold" href={item.url}>{item.label}</a>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Header;