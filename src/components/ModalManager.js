import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Icon,  Modal } from "semantic-ui-react";

import { closeModal, selectAttributes, selectReviews } from "../actions";
import Image from 'react-image-resizer';
import _ from 'lodash';
import '../css/ShoppingCart.css';

export class ModalManager extends Component {

  state = {};   

  addToCart() {
    console.log('pressed');
  }

  render() {
    const { modalConfiguration, attributes} = this.props;

    const defaultProps = {
      defaultOpen: true,
      closeIcon: true,
      onClose: this.props.closeModal
    };

    let renderedComponent;

    if (modalConfiguration) {
      const { modalProps = {} } = modalConfiguration;
      const img = 'https://backendapi.turing.com/images/products/' + modalProps.thumbnail;
     
      this.props.selectAttributes(modalProps.id);
      let colors = _.filter(this.props.attributes,['attribute_name', 'Color']); 
      const sizes = _.filter(attributes,['attribute_name', 'Size']);
      
      const Sizes = sizes.map((child,index) =>                                           
      <button className="ui red circular label" style={{fontWeight: 'bold', fontSize:'1em', marginLeft: '3%', cursor: 'pointer'}} key={index}>{child.attribute_value}  </button>) 

      const Colors = colors.map((child) =>                                           
      <button style={{width:'25px', height:'25px', borderRadius: '50%', backgroundColor:child.attribute_value, border: 'solid 1px black', marginLeft: '10px', cursor: 'pointer'}}  key={child.attribute_value}> </button>)  


      this.props.selectReviews(modalProps.id);
      //console.log(this.props.reviews);

      const starRatings = _.map(this.props.reviews,'rating');
      const StarRatings = starRatings.map(() =>
      <span className="fa fa-star"></span>)

      const Reviews = this.props.reviews.map((review) =>
      
        <div className="comment">
            <button className="avatar">
              <img alt="avatar" src="https://img.icons8.com/material-rounded/50/000000/user.png"/>
            </button>
            <div key={review.name} className="content">
              <div className="author">{review.name}</div>
              <div className="metadata">
                <span className="date">{review.created_on}</span> 
              </div>
              <div className="text">
                {review.review}
              </div>
              <div className="ui star rating">
                {StarRatings}
              </div>
            </div>
        </div>)   
        
          

      
      renderedComponent = <Modal  size='small' {...Object.assign({}, modalProps, defaultProps)}>
                                <Modal.Content image>                                    
                                    <div style={{ width: '27%', marginLeft:'2%'}}>                                        
                                        <Image src={img} height="200" width="200"> </Image>  
                                    </div>
                                    
                                    <div style={{height:'100%' , width: '70%', color: 'black', marginLeft:'5%' }}>                                    
                                        <Header as='h1'>{modalProps.name}</Header>

                                        <div style={{color: 'red', display:'flex', flexDirection:'row'}}>
                                            <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', 
                                                            textDecorationColor: 'red', fontWeight: 'bold', fontSize:'1.2em'}}> 
                                                    ${modalProps.price}   </span>
                                            <span style={{textDecorationStyle: 'solid', textDecorationColor: 'red', fontWeight: 'bold', marginLeft: '7%', fontSize:'2em'}}> 
                                                    ${modalProps.discounted_price} </span>
                                        </div>


                                        <p style={{color:'black', marginTop: '3%', fontSize: '17px'}}>{modalProps.description}</p>

                                        <span style={{fontWeight: 'bold%', fontSize: '18px'}}>Size </span>
                                            <div className="size-container">
                                                {Sizes}
                                            </div>

                                        <br /><span style={{fontWeight: 'bold%', fontSize: '18px'}}>Color </span>
                                        <div className="color-container" style={{display:'flex', flexDirection:'row'}}>
                                            {Colors}
                                        </div>

                                        <br />
                                        <button className={`ui left floated button cartButton`} onClick={this.addToCart}>
                                          Add to Cart <Icon name='right chevron' />
                                        </button>

                                        <br /><br />

                                        <form className="ui reply form">
                                            <div className="field">
                                              <textarea></textarea>
                                            </div>
                                            <button className={`ui blue labeled submit icon button cartButton`}>
                                              <i className="icon edit"></i> Leave Review
                                            </button>
                                        </form>

                                        <br /><span style={{fontWeight: 'bold%', fontSize: '18px'}}>Reviews </span>
                                        <div class="ui comments">
                                            {Reviews}
                                        </div>                              
                                    
                                    </div>
                                </Modal.Content>
                                <Modal.Actions>
                                <Button primary>
                                    Close 
                                </Button>
                                </Modal.Actions>
      
                            </Modal>;
    }

    //console.log(renderedComponent);

    return <span>{renderedComponent}</span>;
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return { modalConfiguration: state.modals, attributes: state.attributes, reviews: state.reviews };
}

export default connect(mapStateToProps, { closeModal, selectAttributes, selectReviews })(ModalManager);
