import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './navigation/Home';
import ShoppingCart from './navigation/ShoppingCart';
import ShippingAddress from './navigation/ShippingAddress';

import { selectedDepartment, selectedCategory } from '../actions';

import Header from './Header';
import Departments from './Departments';
import SearchBar from './SearchBar';
import Categories from './Categories';



const App = () => {
    return (
        <div className="ui container">
            Jayanth React project deployed globally - Test
            <BrowserRouter>
                <div className="ui container">
                    <Header />
                    <div>
                        <Departments />
                        <SearchBar />
                    </div>

                    <div className="ui container grid">
                        <div className="ui row">
                            <div className="column five wide">
                                <Categories />
                            </div>
                            <div className="column eleven wide">
                                Shirt LIst
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