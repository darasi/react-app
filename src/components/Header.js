import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Responsive } from 'semantic-ui-react';

class Header extends Component {

  componentDidMount() {
    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").classList.add("fixed");
        } else {
            document.getElementById("header").classList.remove('fixed');
        }
    }
  }

  render() {
    return <header className="header" id="header">
              <Container fluid>
                <Menu secondary className="header-menu">
                  <Menu.Item className="header-logo">
                    LOGO
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Responsive as={Menu.Item} minWidth={768}><Link to='/'>HOME</Link></Responsive>
                    <Responsive as={Menu.Item} minWidth={768}><Link to='/user'>USER</Link></Responsive>
                    <Responsive as={Menu.Item} minWidth={768}><Link to='/thunk'>THUNK</Link></Responsive>
                    <Responsive as={Menu.Item} minWidth={768}><Link to='/register'>REGISTER</Link></Responsive>
                  </Menu.Menu>
                </Menu>
              </Container>
          </header>
  }

}

export default Header;
