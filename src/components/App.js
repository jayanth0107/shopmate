import React from 'react';

import '../css/App.css';

import Header from './Header';
import Footer from './Footer';
import ContentPage from './RouterPage';
import Departments from './Departments';

const App = () => {
    
    return (
        <div className={`appdiv ui container`}>
            
                <div>

                    <Header /> 
                    <Departments /> 
                    <ContentPage/> 
                    <Footer />                
                    
                </div>
            
            
        </div>
     );
   
};


export default App;
