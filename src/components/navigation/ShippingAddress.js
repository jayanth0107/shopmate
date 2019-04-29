import React from 'react';

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
  <h4 className={`ui dividing header shippingHeader`}>Billing Information</h4>
        <div className="field">         

            <select className="ui fluid dropdown">
                    <option value="">Card Type</option>
                <option value="AL">Visa</option>
                <option value="AK">American Express</option>
                <option value="AZ">Discover</option>
            </select>
        </div>
        <div className="fields">
            <div className="seven wide field">
            <label>Card Number</label>
            <input type="text" name="card[number]" maxLength="16" placeholder="Card #"/>
            </div>
            <div className="three wide field">
            <label>CVC</label>
            <input type="text" name="card[cvc]" maxLength="3" placeholder="CVC"/>
            </div>
            <div className="six wide field">
            <label>Expiration</label>
            <div className="two fields">
                <div className="field">
                <select className="ui fluid search dropdown" name="card[expire-month]">
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                </div>
                <div className="field">
                <input type="text" name="card[expire-year]" maxLength="4" placeholder="Year"/>
                </div>
            </div>
            </div>
        </div>
   
   
  <div className={`ui button shippingSubmit`} tabIndex="0">Submit Order</div>



            </form>
        </div>
    ) 
}

export default ShippingAddress;