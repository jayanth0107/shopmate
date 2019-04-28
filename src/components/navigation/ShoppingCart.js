import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart, removeFromCart, removeAllItemsFromCart, incrementQuantity, decrementQuantity, cartTotal } from '../../actions';

import '../../css/ShoppingCart.css';
import _ from 'lodash';

class ShoppingCart extends React.Component {

    tableData = (cartItems) => {
        console.log(cartItems);
        return (    cartItems.map((cartItem,index) =>
                        <tr key={cartItem.product_id}>
                            <td><button key={'rem'+index} className={`ui labeled icon button cartRemoveButton`}  onClick={(event) => this.removeItem(cartItem)}>
                                    <i key={'close'+index} className="close icon"></i>
                                        Remove
                                </button></td>    
                            <td key={'n'+index}>{cartItem.name}</td>
                            <td>Color: {cartItem.color}, Size: {cartItem.size}</td>
                            <td key={'p'+index}>{cartItem.discounted_price}</td>
                            <td><button className={`ui icon button decCart`} key={'dec'+index} onClick={(event) => this.decrement(cartItem)}><i key={'min'+index} className="minus icon"></i></button>
                                <span className={`qtySpan`}>{cartItem.quantity}</span>
                                <button className={`ui icon button incCart`} key={'inc'+index} onClick={(event) => this.increment(cartItem)}><i key={'plus'+index} className="plus icon"></i></button>
                            </td>
                            <td key={'st'+index}>{cartItem.subtotal_price? cartItem.subtotal_price : cartItem.quantity*cartItem.discounted_price}</td>
                        </tr>
                        )               
                )
    }

    increment = (cartItem) => {

        this.props.cartTotal(1);
        this.props.incrementQuantity(cartItem);  
    }
  
      decrement = (cartItem) => {
          
        if(cartItem.quantity > 0) {
            console.log('going to decrement',cartItem)            
            this.props.cartTotal(-1);
            this.props.decrementQuantity(cartItem);
        }
      }
  
      removeItem = (cartItem) => {
        this.props.cartTotal(-1);
        this.props.removeFromCart(cartItem);
      }
  
      emptyCart = () => {
        this.props.cartTotal(0); 
        this.props.removeAllItemsFromCart();
      }

    render() {
        const {cartItems} = this.props;
        const totalPrice = _.sumBy(cartItems, function(s) {
            return s.discounted_price*s.quantity
        });

        //const thisItemInCart = cartItems.filter(item => item.product_id === )
        return (
            <div className={`mainCartDiv`}>
                <div className={`cartTopDiv`}>
                    <button className={`ui left floated button cartButton`} onClick={this.emptyCart}>EMPTY CART</button>
                    <label className={`totalLabel`}>Total: {Number(totalPrice).toFixed(2)}</label>
                                          
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
    //console.log(state);
    return  {cartItems: state.cart};
     
}

export default connect(mapStateToProps, { addToCart, removeFromCart, removeAllItemsFromCart, incrementQuantity, decrementQuantity, cartTotal })(ShoppingCart);