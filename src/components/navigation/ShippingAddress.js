import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'; //Field is a react component, reduxForm is a function same as connect function

import '../../css/ShippingAddress.css';

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from '../AuthHelperMethods';

const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
//const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(10)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

  const states = [ 'Please Select', 'US / Canada', 'Europe', 'Rest of World']

class ShippingAddress extends React.Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    

    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderField = ({ input, label, type, meta }) => {
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            // <label>{label}</label>
            <div className={className}>
                <input {...input} placeholder={label} type={type} autoComplete="off"/>
                {this.renderError(meta)}
            </div>            
        )
    }

    onSubmit = (formValues) => {
        //this.props.
        console.log(formValues);
        alert(JSON.stringify(formValues));
        this.props.history.push('/billingAddress');
    }

    
    render() {
        return (
            <div className={`mainShippingDiv`}>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h4 className={`ui dividing header shippingHeader`}>Shipping Information</h4>
                    <div className="field">
                        <label>Personal Details</label>
                        <div className="two fields">
                            <Field name="firstname" label="First Name" type="text" component={this.renderField}/>
                            <Field name="lastname" label="Last Name" type="text" component={this.renderField}/>
                            <Field name="email" label="E-mail" type="email" component={this.renderField} />                            
                        </div>
                    </div>
                    <div className="field">
                        <label>Contact Information</label>
                        <div className="two fields">
                            <Field name="mob_phone" label="Mobile Number" type="number" component={this.renderField} validate={[ required, number, minValue18 ]}/>
                            <Field name="day_phone" label="Office phone number" type="number" component={this.renderField} validate={[ number, minValue18 ]}/>
                            <Field name="eve_phone" label="Home phone number" type="number" component={this.renderField} validate={[ number, minValue18 ]}/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Billing Address</label>                        
                        <div className="fields">                        
                             <div className="five wide field">
                                <Field name="address-1" label="Full Address" type="text" component={this.renderField}/>
                             </div> 
                            <div className="four wide field">
                                <Field name="address-2" label="Nearest LandMark / Street Address" type="text" component={this.renderField}/>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Geographical Location Details</label>
                        <div className="fields">
                            <div className="four wide field">
                                <Field name="city" label="City" type="text" component={this.renderField}/>
                            </div>
                            <div className="four wide field">
                                <Field name="region" label="Region" type="text" component={this.renderField}/>
                            </div>
                            <div className="four wide field">
                                <Field name="postal_code" label="Postal Code" type="text" component={this.renderField}/>
                            </div>
                        </div>
                    </div>

                    <div className="three fields">
                        <div className="field">
                        <label>Shipping Regions</label>
                        <Field name="state" component="select">
                            {states.map(state =>
                            <option value={state} key={state}>{state}</option>)}
                        </Field>
                        </div>
                    </div>

                    <div className="field">
                        <label>Credit Card</label>
                        <div className="fields">                            
                            <div className="four wide field">
                                <Field name="credit_card" label="Credit Card" type="number" component={this.renderField} validate={[ number, minValue18 ]}/>
                            </div>
                        </div>
                    </div>
    
                    {/* <Link to="/billingAddress" className="item">
                        <button className={`ui button shippingSubmit`} tabIndex="0">Submit Order</button>
                    </Link> */}
                    
                    <button className={`ui button shippingSubmit`} type="submit" tabIndex="0">Submit Order</button>

    
                </form>
            </div>
        ) 
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.firstname){
        //only ran if user didn't enter title
        errors.firstname = 'You must enter first name';
    }

    if(!formValues.mob_phone){
        //only ran if user didn't enter title
        errors.mob_phone = 'You must enter 10 digit mobile number';
    }

    if (!formValues.email) {
        errors.email = 'Required';
      } else if (!/^.+@.+$/i.test(formValues.email)) {
        errors.email = 'Invalid email address';
      }

    return errors;
};

const formWrapped = reduxForm({
    form: 'UserProfile',
    validate
})(ShippingAddress);

export default withRouter(connect(null, {})(formWrapped));