import React from 'react';
import { Link } from "react-router-dom";

import '../../css/ShoppingCart.css'

class ShoppingCart extends React.Component {


    render() {
        return (
            <div className={`mainCartDiv`}>
                <div className={`cartTopDiv`}>
                    <button className={`ui left floated button cartButton`}>EMPTY CART</button>
                    <label className={`totalLabel`}>Total: </label>
                                          
                        <Link to="/shippingAddress" className="item">
                            <button className={`ui right floated button orderButton`}> PLACE ORDER </button> 
                        </Link>
                                    
                </div>    
                <table className={`ui striped table cartTable`}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Attributes</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>   

                    <tbody>
                        <tr>
                            <td><button className={`ui labeled icon button cartRemoveButton`}>
                                <i className="close icon"></i>
                                    Remove
                                </button></td>    
                            <td>John Lilki</td>
                            <td>September 14, 2013</td>
                            <td>100</td>
                            <td><button className={`ui icon button incCart`}><i className="minus icon"></i></button>
                                <span className={`qtySpan`}>1</span>
                                <button className={`ui icon button decCart`}><i className="plus icon"></i></button>
                            </td>
                            <td>200</td>
                        </tr>
                    </tbody>
                </table>

            </div>         
            
        )
    }
}

export default ShoppingCart;