import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';
import '../css/Categories.css';

class Categories extends React.Component {
    state = {};   

    componentDidMount(){
        this.props.selectCategory();
    }

    render(){  
        //console.log(this.props.categories);
        return (
            this.props.categories.map(category => {
                return(
                    <a className="item" key={category.category_id}>
                            {category.name}
                    </a> 
                )
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories};
}

export default connect(mapStateToProps, { selectCategory })(Categories);