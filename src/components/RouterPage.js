import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './ContentPage';
import ShoppingCart from './navigation/ShoppingCart';
import ShippingAddress from './navigation/ShippingAddress';
import ContentPage from './ContentPage';

import '../css/Header.css';

const RouterPage = () => (
    <main>
      <Switch>
        <Route exact path='/' component={ContentPage}/>
        <Route path='/shoppingCart' component={ShoppingCart}/>
        <Route path='/shippingAddress' component={ShippingAddress}/>
      </Switch>
    </main>
 )
  
 export default RouterPage;