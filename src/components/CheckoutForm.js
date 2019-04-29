import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

const createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
          padding,
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) {
        console.log("Purchase Complete!");
        this.setState({complete: true, elementFontSize: window.innerWidth < 450 ? '14px' : '18px'})
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }; 


  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (

        <form onSubmit={this.handleSubmit}>
            <div>
                <p>Would you like to complete the purchase?</p>
                <label>
                Card details
                <CardElement
                    {...createOptions(this.props.fontSize)}
                />
                </label>
                <button >Pay</button>
            </div>
         </form>
        

    );
  }
}

export default injectStripe(CheckoutForm);