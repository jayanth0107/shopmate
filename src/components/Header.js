import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Hi Sign in or Register
            </Link>
            <div className="right menu">
                <i className="shopping bag icon big"></i>
                <Link to="/" className="item">
                    Your Bag
                 </Link>
            </div>
        </div>
    )
};

export default Header;