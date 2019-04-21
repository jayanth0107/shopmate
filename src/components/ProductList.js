import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions';
import '../css/ProductList.css';

class ProductList extends React.Component {
    state = {}; 

    componentDidMount(){
        this.props.selectProduct();
    }

    renderList(){

        return this.props.products.map(product => {
            return(  
                <div className="card">
                    <div className="content">
                        <div className="header">{product.name}</div>                    
                    </div>              
                    <div className="image">
                        <img alt={product.name} src={'https://backendapi.turing.com/images/products/' + product.thumbnail}/>
                    </div>  
                    <div className="ui tag labels">
                        <a className="ui red label">${product.price}</a>
                        <a className="ui strikethrough label">${product.discounted_price}</a>
                    </div>
                    <div className="description">
                        {product.description}
                    </div> 
                </div>                  
            )
        })
    }

    render(){  
        //console.log(this.props.products); //returns only 20
        
        return (
            <div className="ui link cards">                    
                    {this.renderList()}                                    
            </div>
                
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(mapStateToProps, { selectProduct })(ProductList);