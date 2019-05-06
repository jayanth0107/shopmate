import React from 'react';
import { Link } from "react-router-dom";

import '../../css/ShippingAddress.css'

const ShippingAddress = () => {
    return (
        <div className={`mainShippingDiv`}>
            <form className="ui form">
                <h4 className={`ui dividing header shippingHeader`}>Shipping Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name"/>
                        </div>
                        <div className="field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Billing Address</label>
                    <div className="fields">
                        <div className="twelve wide field">
                            <input type="text" name="shipping[address]" placeholder="Street Address"/>
                        </div>
                        <div className="four wide field">
                            <input type="text" name="shipping[address-2]" placeholder="Plot #"/>
                        </div>
                    </div>
                </div>

                <div className="two fields">
                <div className="field">
                <label>State</label>
                <select className="ui fluid dropdown">
                    <option value="">State</option>
                    <option value="TS">Telangana</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>                    
                    <option value="WA">France</option>
                    
                </select>
                </div>
                <div className="field">
                <label>Country</label>
                    <select className="ui fluid dropdown">
                        <option value="">Select Country</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="DE">Germany</option>
                    </select>
                
    </div>
  </div>
 
        <Link to="/billingAddress" className="item">
            <div className={`ui button shippingSubmit`} tabIndex="0">Submit Order</div>
        </Link>
   
            </form>
        </div>
    ) 
}

export default ShippingAddress;