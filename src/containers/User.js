import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { apiUrl, checkoutSuccessUrl, checkoutCancelUrl } from '../api';
import * as actions from '../store/actions/checkout';

class User extends Component {
  state = {
    Model: null,
    data: {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: `${apiUrl}/checkout/paypal/return?successUrl=${checkoutSuccessUrl}`,
        cancel_url: `${apiUrl}/checkout/paypal/cancel?cancelUrl=${checkoutCancelUrl}`
      },
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: '25.00'
          }
        }
      ]
    }
  };

  handleImportModelClick = () => import('./Model').then(Model => this.setState({ Model }));

  handleCheckoutPaypal = () => this.props.paypal(this.state.data);

  render() {
    const { Model } = this.state;

    return (
      <section className="root">
        <Link to="/">HOME PAGE</Link>
        <button onClick={this.handleImportModelClick}>model</button>
        <button onClick={this.handleCheckoutPaypal}>paypal</button>
        {Model && <Model />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  checkout: state.checkout
});
const mapDispatchToProps = dispatch => bindActionCreators({
  paypal: actions.paypal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
