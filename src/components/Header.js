import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Responsive, Dropdown, Flag } from 'semantic-ui-react';
import { FormattedMessage as Tr } from 'react-intl';
import * as actions from '../store/actions/auth';
import * as localeActions from '../store/actions/locale';
import { userIsAuthenticated, userIsNotAuthenticated } from '../components/hoc/ReduxAuthWrapper';
import '../assets/css/header.scss';

class Header extends Component {
  componentDidMount() {
    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').classList.add('fixed');
      } else {
        document.getElementById('header').classList.remove('fixed');
      }
    };
  }

  setLocale = lang => this.props.setLocale(lang);

  logout = () => this.props.logout();

  render() {
    const { lang } = this.props;

    const LoggedInNavLinks = userIsAuthenticated(({ logout }) => (
      <React.Fragment>
        <Responsive as={Menu.Item} minWidth={768}>
          <NavLink to="/user">USER</NavLink>
        </Responsive>
        <Responsive as={Menu.Item} minWidth={768}>
          <NavLink to="/site/1">SITE</NavLink>
        </Responsive>
        <Responsive as={Menu.Item} minWidth={768}>
          <a onClick={logout}>LOGOUT</a>
        </Responsive>
      </React.Fragment>
    ));

    const LoggedOutNavLinks = userIsNotAuthenticated(() => (
      <React.Fragment>
        <Responsive as={Menu.Item} minWidth={768}>
          <NavLink to="/login">LOGIN</NavLink>
        </Responsive>
        <Responsive as={Menu.Item} minWidth={768}>
          <NavLink to="/register">REGISTER</NavLink>
        </Responsive>
      </React.Fragment>
    ));

    return (
      <header className="header" id="header">
        <Container fluid>
          <Menu secondary className="header-menu">
            <Menu.Item className="header-logo">LOGO</Menu.Item>
            <Menu.Menu position="right">
              <Responsive as={Menu.Item} minWidth={768}>
                <NavLink to="/" exact>
                  <Tr id="home" />
                </NavLink>
              </Responsive>
              <Responsive as={Menu.Item} minWidth={768}>
                <NavLink to="/thunk">THUNK</NavLink>
              </Responsive>
              <LoggedInNavLinks logout={this.logout} />
              <LoggedOutNavLinks />
              <Responsive as={Menu.Item} minWidth={768}>
                <Dropdown text={lang}>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setLocale('ka')}>
                      <Flag name="ge" /> Georgian
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setLocale('en')}>
                      <Flag name="us" /> English
                    </Dropdown.Item>
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
  logout: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.router.location,
  lang: state.locale.lang
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout: actions.logout,
  setLocale: localeActions.setLocale
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
