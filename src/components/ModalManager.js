import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Icon,  Modal } from "semantic-ui-react";

import { closeModal, selectAttributes, selectReviews } from "../actions";
import Image from 'react-image-resizer';
import _ from 'lodash';

import '../css/ModalManager.css';
import Rating from 'react-rating';

export class ModalManager extends Component {

  constructor(props) {    
    super(props)
    this.state = {
      colorCondition: false, sizeCondition:false
    }
  }
  //_isMounted = false;

  addToCart = (event, modalProps, color, size) => {
    console.log(modalProps, color, size);
    console.log(event.currentTarget.value);

    let siblings = [];
    var sibling = event.currentTarget.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1) {
                siblings.push(sibling);
            }
            
            sibling.className = 'colorDot';
            sibling = sibling.nextSibling;
          }
        //console.log(siblings);

    event.currentTarget.className = 'selectedColorDot';    

  }

  addColorToCart = (event, modalProps, color) => {
    
    let siblings = [];
    var sibling = event.currentTarget.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1) {
                siblings.push(sibling);
            }
            
            sibling.className = 'colorDot';
            sibling = sibling.nextSibling;
          }
        //console.log(siblings);

    event.currentTarget.className = 'selectedColorDot';    
  
  }

  componentDidMount(){
    //this._isMounted = true;
  }

  componentWillUnmount(){   
    //this._isMounted = false;
  }


  configureModal = (modalProps,defaultProps) => {

      const { attributes, reviews} = this.props;      

      const generateStars = (num) => {
        const a = [...Array(num).keys()];        
        return (
        <span>{a.map((num,index) => { return <i key={index} className={`fa fa-star starColor`}></i> } )} </span>)
      }      

      const img = 'https://backendapi.turing.com/images/products/' + modalProps.thumbnail;
     
      this.props.selectAttributes(modalProps.product_id);
      const colors = _.filter(this.props.attributes,['attribute_name', 'Color']); 
      const sizes = _.filter(attributes,['attribute_name', 'Size']);
      
      const Sizes = sizes.map((size,index) =>                                           
      <button className={`ui circular label sizeColor`} key={'size'+index} value={size.attribute_value} 
              onClick={(event) => this.addSizeToCart(event, modalProps, size.attribute_value)}>{size.attribute_value}</button>) 

      const Colors = colors.map((color) =>                                           
      <button className=  { this.state.colorCondition ? `selectedColorDot` : `colorDot`}    ref='colorPicker'         
              style={{backgroundColor: color.attribute_value}} 
              value={color.attribute_value} key={color.attribute_value} 
              onClick={(event) => this.addColorToCart(event, modalProps, color.attribute_value)}></button>)  

      this.props.selectReviews(modalProps.product_id);
      const Reviews = reviews.map((review, index) =>
      
        <div className="comment" key={'review'+index}>
            <button className="avatar">
              <img alt="avatar" src="https://img.icons8.com/material-rounded/50/000000/user.png"/>
            </button>
            <div className="content">
              <div className="author" key={review.name}>{review.name}</div>
              <div className="metadata">
                <span className="date" key={review.created_on}>{review.created_on}</span> 
              </div>
              <div key={review.review} className="text">
                {review.review}
              </div>
              <div key={'star'+index}>                
                {generateStars(review.rating)}
              </div>              
            </div>
        </div>)


    return (
    <Modal size='small' {...Object.assign({}, modalProps, defaultProps)}>
      <Modal.Content image>                                    
        <div className={`imageDivModal`}>                                        
            <Image src={img} height="200" width="200"> </Image>  
        </div>
        
        <div className={`headerDivModal`} >                                    
            <Header as='h1'>{modalProps.name}</Header>

            <div className={`priceDivModal`} style={{display:'flex', flexDirection:'row'}}>
                <span className={`priceModal`}> 
                        ${modalProps.price}   </span>
                <span className={`discountedPriceModal`}> 
                        ${modalProps.discounted_price} </span>
            </div>

            <p className={`descriptionModal`}>{modalProps.description}</p>

            <span className={`sizeColorTextModal`}>Size </span>
                <div className={`sizeContainer`}>
                    {Sizes}
                </div>

            <br /><span className={`sizeColorTextModal`}>Color </span>
            <div className={`colorContainer`}>
                {Colors}
            </div>

            <br />
            <button className={`ui right floated button cartButton`} onClick={(event) => this.addToCart(event,modalProps,'White', 'L')}>
              Add to Cart <Icon name='right chevron' />
            </button>

            <br /><br /><span style={{fontWeight: 'bold', fontSize: '18px'}}>Leave Review </span>
            <span ><div className ="ui rating" data-max-rating="1"></div></span>
            <form className="ui reply form">
                <div className="field">
                  <textarea></textarea>
                </div>
                <div>
                  <button className={`ui blue labeled submit icon button cartButton`}>
                    <i className="icon edit"></i> Leave Review 
                  </button>
                  <Rating emptySymbol="fa fa-star-o fa-2x" style={{color:'#f30965'}}
                          fullSymbol="fa fa-star fa-2x" start={0} step={1} initialRating={3} />
                </div>
                
            </form>

            <br /><span style={{fontWeight: 'bold%', fontSize: '18px'}}>Reviews </span>
            <div className="ui comments">
                {Reviews}
            </div>                              
        
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={this.props.closeModal}>
            Close 
        </Button>
      </Modal.Actions>

    </Modal>)
  }

  render() {
    const { modalConfiguration} = this.props;

    const defaultProps = {
      defaultOpen: true,
      closeIcon: true,
      onClose: this.props.closeModal
    };

    let renderedComponent;

    if (modalConfiguration) {
      const { modalProps = {} } = modalConfiguration;        
      renderedComponent = this.configureModal(modalProps,defaultProps);
    }

    return <span>{renderedComponent}</span>;
  }
  
}

function mapStateToProps(state) {
  //console.log(state);
  return { modalConfiguration: state.modals, attributes: state.attributes, reviews: state.reviews, cart: state.cart };
}

export default connect(mapStateToProps, { closeModal, selectAttributes, selectReviews })(ModalManager);
