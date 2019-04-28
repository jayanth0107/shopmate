import React from 'react';
import { connect } from "react-redux";

import '../css/App.css';

import Headers from './ShopMateHeader';
import Footer from './Footer';
import ContentPage from './RouterPage';
import Departments from './Departments';

import { openModal } from "../actions";


class App extends React.Component {    
    
    render() {
        return (
            <div className={`appdiv ui container`}>
                
                    <div>

                        <Headers /> 
                        <Departments /> 
                        <ContentPage/> 
                        <Footer />                            
                        
                    </div>
                
                
            </div>
        );
    }
   
};


export default connect(null, { openModal })(App);