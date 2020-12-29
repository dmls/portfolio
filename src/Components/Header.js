import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
          <Col>
            <h2 className="font-poppins">Web Development</h2>
          </Col>
          
          <Col>
            <div className="float-right mt-2">
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