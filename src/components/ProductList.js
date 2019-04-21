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
                <div key={product.product_id} className={`ui card`}>                                  
                    <div className="image">
                        <img alt={product.name} src={'https://backendapi.turing.com/images/products/' + product.thumbnail}/>
                    </div>  
                    <div className="content">
                        <div className="center aligned header">{product.name}</div>                 
                        <div className="ui tag labels">
                            <a className={`ui left large floated label`} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: 'black'}}>${product.price}</a>
                            <a className="ui red label large right floated">${product.discounted_price}</a>
                        </div>
                        <div className="description">
                            {product.description}
                        </div> 
                    </div>
                </div>                  
            )
        })
    }

    render(){  
        //console.log(this.props.products); //returns only 20
        
        return (
            <div className={`ui cards cardList`}>                    
                    {this.renderList()}                                    
            </div>
                
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(mapStateToProps, { selectProduct })(ProductList);