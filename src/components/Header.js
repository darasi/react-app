import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Responsive, Dropdown, Flag } from 'semantic-ui-react';
import { FormattedMessage as Tr } from 'react-intl';
import * as actions  from '../store/actions/auth';

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

  setLocale = (lang) => this.props.setLocale(lang);

  logout = () => this.props.logout();

  render() {
    const { isAuth, lang } = this.props;
    return (
      <header className="header" id="header">
        <Container fluid>
          <Menu secondary className="header-menu">
            <Menu.Item className="header-logo">
              LOGO
            </Menu.Item>
            <Menu.Menu position='right'>
              <Responsive as={Menu.Item} minWidth={768}>
                <NavLink to='/' exact><Tr id="home" /></NavLink>
              </Responsive>
              <Responsive as={Menu.Item} minWidth={768}>
                <NavLink to='/thunk'>THUNK</NavLink>
              </Responsive>
              {isAuth
                ? <React.Fragment>
                    <Responsive as={Menu.Item} minWidth={768}><NavLink to='/user'>USER</NavLink></Responsive>
                    <Responsive as={Menu.Item} minWidth={768}><a onClick={this.logout}>LOGOUT</a></Responsive>
                  </React.Fragment>
                : <React.Fragment>
                    <Responsive as={Menu.Item} minWidth={768}>
                      <NavLink to='/login'>LOGIN</NavLink>
                    </Responsive>
                    <Responsive as={Menu.Item} minWidth={768}>
                      <NavLink to='/register'>REGISTER</NavLink>
                    </Responsive>
                  </React.Fragment>
              }
              <Responsive as={Menu.Item} minWidth={768}>
              <Dropdown>
                <Dropdown.Menu text={lang}>
                  <Dropdown.Item onClick={() => this.setLocale('ka')}><Flag name="ge" /> Georgian</Dropdown.Item>
                  <Dropdown.Item onClick={() => this.setLocale('en')}><Flag name="us" /> English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Responsive>
            </Menu.Menu>
          </Menu>
        </Container>
    </header>
    );
  }

}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  location: state.router.location,
  isAuth: state.auth.isAuth,
  lang: state.locale.lang
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: actions.logout,
  setLocale: actions.setLocale
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Header)
