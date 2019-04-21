import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './navigation/Home';
import ShoppingCart from './navigation/ShoppingCart';
import ShippingAddress from './navigation/ShippingAddress';
import '../css/App.css';

import Header from './Header';
import Departments from './Departments';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductList from './ProductList';

const App = () => {
    return (
        <div className={`appdiv ui container`}>
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Departments />
                        <SearchBar />
                    </div>

                    {/* <div className="ui visible left vertical sidebar menu">
                                <Categories />       
                            </div>
                            
                            
                                <div className="ui basic segment">
                                    <ProductList />                          
                                </div> */}
                           
                         

                        <div className="ui grid">
                            <div className="three wide column">
                                <div className={`ui visible inverted left vertical sidebar fixed menu leftSideBar`}>
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
};

export default App;