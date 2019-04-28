import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { Button,  Form,  Grid,  Header,  Message,  Segment,  Modal} from "semantic-ui-react";

import '../css/Header.css';

class ShopMateHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.open = this.open.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.close = this.close.bind(this);
  }

  openRegister() {
    this.setState({ openRegister: true });
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    //console.log("-----", this.state);
    return (
      <div>
        <div className="ui secondary pointing menu">
          <div className={`headerText`}>Hi!  </div>
          <button to="/" className={`item signIn`} onClick={this.open}>
            Sign In
          </button>
          <div className={`headerText`}>or  </div>
          <button to="/" className={`item register`} onClick={this.openRegister}>
            Register
          </button>          

          <div className="right menu">
            <Link to="/shoppingCart" className="item">
              <i className={`shopping bag icon big headerIcon`}/>
              <span className={`floating ui red label cartNumber`} style={{marginLeft: '8% !important'}}>{this.props.cartItems.length}</span>              
              <div className={`bagText`}>Your Bag</div>  
            </Link> 
          </div>

          {/* <div className="ui compact right menu">
            <li className="item">
              <i className={`shopping bag icon big headerIcon`} />
              <div className="floating ui red label">0</div>
            </li>
            <li className="item">
              <Link to="/shoppingCart" className="item">
                Your Bag
              </Link>
            </li>
          </div> */}
        </div>

        <Modal open={this.state.open} onClose={this.close}>
          <Modal.Content>
            <div className="login-form">
              <Grid
                textAlign="center"
                style={{ height: "100%" }}
                verticalAlign="middle"
               >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as="h2" color="teal" textAlign="center">
                    Sign in
                  </Header>
                  <Form size="large">
                    <Segment stacked>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail"
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                      />

                      <Button color="teal" fluid size="large">
                        Login
                      </Button>
                    </Segment>
                  </Form>
                  <Message>
                    New to us? <button href="#">Sign Up</button>
                  </Message>
                </Grid.Column>
              </Grid>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return  {cartItems: state.cart};
   
}


export default connect(mapStateToProps, { addToCart })(ShopMateHeader);
