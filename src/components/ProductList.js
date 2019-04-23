import React from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectProductFromCategory, selectProductFromDepartment } from '../actions';
import '../css/ProductList.css';

class ProductList extends React.Component {
    state = {data:[],pageInfo:[]}; 

    componentDidMount(){
        this.props.selectProduct(1); // 1 is the first page
    }

    renderList(){

        return this.props.products && this.props.products.map(product => {
            return(  
                <div key={product.product_id} className={`ui card productCard`}>                                  
                    <div className="image">
                        <img alt={product.name} src={'https://backendapi.turing.com/images/products/' + product.thumbnail}/>
                    </div>  
                    <div className="content">
                        <div className={`center aligned header productName`}>{product.name}</div>                 
                        <div className={`ui tag labels priceDiv`}>
                            <a className={`ui left large floated label priceTag`} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: 'black'}}>${product.price}</a>
                            <a className={`ui red right large floated label discountPriceTag`}>${product.discounted_price}</a>
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
    //console.log(state.products.data.rows);
    return { products: state.products.data.rows, productCount: state.products.data.count };
}

export default connect(mapStateToProps, { selectProduct, selectProductFromCategory, selectProductFromDepartment })(ProductList);