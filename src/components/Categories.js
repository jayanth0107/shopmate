import React from 'react';
import { connect } from 'react-redux';

class Categories extends React.Component {
    state = {};   

    render(){       

        //render component based on teh above value
        return (
            <div>
                <h1>Categories</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Categories);