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
                
                    <div className="image">
                        <img src={'https://backendapi.turing.com/images/products/' + product.thumbnail}/>
                    </div>                          
            )
        })
    }

    render(){  
        //console.log(this.props.products); returns only 20
        const {description, urls} = this.props.products;
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