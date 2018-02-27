import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { FormattedMessage as Tr } from 'react-intl';
import { Icon } from 'semantic-ui-react';

const FacebookLoginButton = ({ fbAuth }) => (
  <FacebookLogin
    appId="2055932434639401"
    version="2.12"
    fields="name,email,photos"
    textButton={<Tr id="continue with facebook" />}
    cssClass="ui facebook fluid button"
    icon={<Icon name="facebook square" />}
    callback={fbAuth}
  />
);

FacebookLoginButton.propTypes = {
  fbAuth: PropTypes.func.isRequired,
};

export default FacebookLoginButton;
