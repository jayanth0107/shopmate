
import React from 'react';

class SearchBar extends React.Component {
    state = {};   

    render(){       

        //render component based on teh above value
        return (
            <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search Anything ..." />
                            <i className="search link icon"></i>
                        </div>
            </div>
        )
    }


}

export default SearchBar;