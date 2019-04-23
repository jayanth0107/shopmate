import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './navigation/Home';
import ShoppingCart from './navigation/ShoppingCart';
import ShippingAddress from './navigation/ShippingAddress';
import '../css/App.css';
import { connect } from 'react-redux';

import Header from './Header';
import Departments from './Departments';
import Categories from './Categories';
import ProductList from './ProductList';
import Pagination from './Pagination';

class App extends React.Component {

  state = {data:'',pageInfo:''}; 
  render() {

    return (
        <div className={`appdiv ui container`}>
            <BrowserRouter>
                <div>
                    <Header />                    
                    <Departments />                              
                    
                    <div className={`ui pagination menu pageDiv`}>
                        <div className={`categoryText`}>Categories</div >
                        <div className={`pageButtonStart`}>
                                <Pagination />
                        </div>                        
                    </div>    

                    <div className="ui grid">
                        <div className="three wide column">
                            <div className={`ui visible left vertical sidebar fixed menu leftSideBar`}>
                                  <Categories /> 
                            </div>
                        </div>
                        <div className="thirteen wide stretched column">
                            <div className={`ui segment listHeight`}>
                                    <ProductList />  
                            </div>
                        </div>
                    </div>                         
                        

                    
                    <Route path="/navigation/home" exact component={ Home } />
                    <Route path="/navigation/cart" exact component={ ShoppingCart } />
                    <Route path="/navigation/address" exact component={ ShippingAddress } />
                </div>
            
            </BrowserRouter>
        </div>
     );
   }
};

const mapStateToProps = (state) => {
    return {data:'',pageInfo:''};
}

export default connect(mapStateToProps)(App);
