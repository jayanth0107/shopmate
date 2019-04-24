import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Icon,  Modal  } from "semantic-ui-react";

import { closeModal } from "../actions";
import Image from 'react-image-resizer';

export class ModalManager extends Component {
  render() {
    const { modalConfiguration } = this.props;

    const defaultProps = {
      defaultOpen: true,
      closeIcon: true,
      onClose: this.props.closeModal
    };

    let renderedComponent;

    if (modalConfiguration) {
      const { modalProps = {} } = modalConfiguration;
      const img = 'https://backendapi.turing.com/images/products/' + modalProps.thumbnail
      console.log(modalProps);
      console.log("img-"+img);
      renderedComponent = <Modal {...Object.assign({}, modalProps, defaultProps)} size="medium">
                                <Modal.Content image>
                                    {/* <Image wrapped size='big' src={img}  /> */}
                                    <div style={{ width: '27%', marginLeft:'2%'}}>
                                        {/* <img src={img} alt={modalProps.name} /> */}
                                        <Image src={img} height="200" width="200"> </Image>  
                                    </div>
                                    
                                    <div style={{height:'100%' , width: '70%' }}>
                                    
                                        <Header as='h1'>{modalProps.name}</Header>

                                        <div style={{color: 'red', display:'flex', flexDirection:'row'}}>
                                            <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', 
                                                            textDecorationColor: 'red', fontWeight: 'bold', fontSize:'1.2em'}}> 
                                                    ${modalProps.price}   </span>
                                            <span style={{textDecorationStyle: 'solid', textDecorationColor: 'red', fontWeight: 'bold', marginLeft: '7%', fontSize:'2em'}}> 
                                                    ${modalProps.discounted_price} </span>
                                        </div>


                                        <p style={{color:'black', marginTop: '3%'}}>{modalProps.description}</p>
                                        <button className="circular ui icon button">
                                            <i className="icon settings"></i>
                                        </button>
                                    
                                    </div>
                                </Modal.Content>
                                <Modal.Actions>
                                <Button primary>
                                    Proceed to Cart <Icon name='right chevron' />
                                </Button>
                                </Modal.Actions>
      
                            </Modal>;
    }

    //console.log(renderedComponent);

    return <span>{renderedComponent}</span>;
  }
}

function mapStateToProps(state) {
  return { modalConfiguration: state.modals };
}

export default connect(mapStateToProps, { closeModal })(ModalManager);
