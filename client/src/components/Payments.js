import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../app.css';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout 
        name='Decode Factory'
        description='5 Dollar for 5 Email Credits'
        amount={500} //give me 5$ in US currency
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='payment-btn'>
            Add Credits
        </button>
        </StripeCheckout>
    );
  }
}

export default connect(null, actions) (Payments);