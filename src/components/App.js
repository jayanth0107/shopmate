import React from 'react';
import { connect } from "react-redux";

import '../css/App.css';

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from './AuthHelperMethods';

//Our higher order component
import withAuth from './withAuth';

import Headers from './ShopMateHeader';
import Footer from './Footer';
import ContentPage from './RouterPage';
import Departments from './Departments';

import { openModal } from "../actions";


class App extends React.Component {    

    state = {
        username: ''
    }

      /* Create a new instance of the 'AuthHelperMethods' compoenent*/
    Auth = new AuthHelperMethods();
    
    _handleLogout = () => {
        this.Auth.logout()
        this.props.history.replace('/login');
    }
    
    
    render() {

        let name = null;
        if (this.props.confirm) {
        name = this.props.confirm.username;
        }
        //let name = this.props.confirm.username;
        console.log("Rendering Appjs!")
        return (
            <div className={`appdiv ui container`}>
                
                    <div>
                    <div className="top-section">
                            <h1>Welcome, {name}</h1>
                            </div>
                            <div className="bottom-section">
                            <button onClick={this._handleLogout}>LOGOUT</button>
                       </div>


                        <Headers /> 
                        <Departments /> 
                        <ContentPage/> 
                        <Footer />                            
                        
                    </div>
                
                
            </div>
        );
    }
   
};

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.

export default connect(null, { openModal })(App);
