import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

import '../../css/ShoppingCart.css'

class ShoppingCart extends React.Component {

    tableData = (cartItems) => {
        console.log(cartItems);
        return (    cartItems.map((cartItem,index) =>
                        <tr key={cartItem.product_id}>
                            <td><button className={`ui labeled icon button cartRemoveButton`}>
                                <i className="close icon"></i>
                                    Remove
                                </button></td>    
                            <td key={index}>{cartItem.name}</td>
                            <td>Color: {cartItem.color}, Size: {cartItem.size}</td>
                            <td>{cartItem.discounted_price}</td>
                            <td><button className={`ui icon button incCart`} onClick={this.increment}><i className="minus icon"></i></button>
                                <span className={`qtySpan`}>{cartItem.quantity}</span>
                                <button className={`ui icon button decCart`} onClick={this.decrement}><i className="plus icon"></i></button>
                            </td>
                            <td>{cartItem.discounted_price}</td>
                        </tr>
                        )               
                )
    }

    increment = () => {
        //document.getElementsByClassName('qtySpan').
    }

    decrement = () => {

    }

    emptyCart = () => {
        //cartItems = {};
    }

    render() {
        const {cartItems} = this.props;

        //const thisItemInCart = cartItems.filter(item => item.product_id === )
        return (
            <div className={`mainCartDiv`}>
                <div className={`cartTopDiv`}>
                    <button className={`ui left floated button cartButton`} onClick={this.emptyCart}>EMPTY CART</button>
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
                            {this.tableData(cartItems)}                        
                    </tbody>
                </table>

            </div>         
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return  {cartItems: state.cart};
     
}

export default connect(mapStateToProps, { addToCart })(ShoppingCart);