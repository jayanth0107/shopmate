import React from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectProductFromCategory, selectProductFromDepartment, searchProduct } from '../actions';
import '../css/ProductList.css';
import Modal from './Modal';
import history from './history';

class ProductList extends React.Component {
    state = {data:[], depId:'', catId:''}; 

    constructor(props){
        super(props);
        this.searchingFor = this.searchingFor.bind(this);
    }

    componentDidMount(){
        this.props.selectProduct(1); // 1 is the first page        
    } 
    
     searchingFor(searchTerm){
        return function(x){
            return x.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    x.description.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm;
        }
    }

    renderList(){ 

      const {search,products} = this.props;
      let  finalProductList = [];

      if(this.props.products !== undefined) {

        if( search && search.length > 0) {
           const searchTerm =  search[search.length-1].searchTerm;
            finalProductList = products.filter(this.searchingFor(searchTerm));
        } else {
            finalProductList = this.props.products;
        }
        
        return finalProductList.map(product => {            
            //console.log(this.props.products);
            const actions = (
                // <React.Fragment>

                <div> 
                    <button className="ui button negative">Delete</button>
                </div>

                // </React.Fragment>
                
            );
            return(  
                <div key={product.product_id} className={`ui card productCard`} >                                  
                    <div className="image">
                        <img className={`productImage`} alt={product.name} src={'https://backendapi.turing.com/images/products/' + product.thumbnail}/>
                    </div>  
                    <div className="content">
                        <div className={`center aligned header productName`}>{product.name}</div>                 
                        <div className={`ui tag labels priceDiv`}>
                            <button className={`ui left large floated label priceTag`} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: 'black'}}>${product.price}</button>
                            <button className={`ui red right large floated label discountPriceTag`}>${product.discounted_price}</button>
                        </div>
                        <div className="description">
                            {product.description}
                        </div> 
                    </div>
                    {/* <Modal title={product.name} content={product.description} actions={actions} onDismiss={() => history.push('/navigation/cart ')}/>   */}
                </div>             
            )
        })
      }
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
    //console.log('state',state);

    return  {products: state.products.data.rows, productCount: state.products.data.count, search: state.search};
     
}

export default connect(mapStateToProps, { selectProduct, selectProductFromCategory, selectProductFromDepartment, searchProduct })(ProductList);