
import React from 'react';
import { connect } from 'react-redux';
import { searchProduct, selectProduct } from '../actions';

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class SearchBar extends React.Component {   
    
    onSearchHandler = (event) => {
        let term = event.target.value;   
        //let orgProductList = this.props.products;
        
        //console.log(this.props.products);
        
        //const searchProductList = this.props.products.filter(searchingFor(term));  
             
        //const searchJson = {count:searchProductList.length, rows: searchProductList}
        //console.log(searchJson);       
        this.props.searchProduct(term); 
    }

    render(){       

        return (
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search Anything ..." onChange={this.onSearchHandler}/>
                        <i className="search link icon"></i>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     //console.log(state.search);
//     if(!state.search){
//         console.log('in here');
//         return {products: state.search[0].finallist };
//     } else {
//         return {products: state.products.data.rows };
//     }
// }

export default connect(null, {searchProduct, selectProduct})(SearchBar);