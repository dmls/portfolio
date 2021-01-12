import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
      <Container fluid className="bg-blueDark position-fixed py-4" style={{zIndex: 900}}>
        <Row className="mx-5">
          <Col sm={12} md={6}>
            <Row>
              <Col className="d-none d-md-block" sm={2}>
                <Image fluid src={logo} alt="DM Logo" />
              </Col>

              <Col className="d-sm-block d-md-none text-center">
                <Image className="w-25" src={logo} alt="DM Logo" />
              </Col>
            </Row>
          </Col>
          
          <Col sm={12} md={6}>
            <div className="float-sm-none float-md-right mt-4 text-center">
              {this.navItems.map(function(item, index) {
                return (
                  <a className={(index === 0 ? '' : 'ml-3 ml-md-5') + ' text-white font-weight-bold'} href={item.url}>{item.label}</a>
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