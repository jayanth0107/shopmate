import React from 'react';
import { connect } from 'react-redux';
import { selectCategory, selectProductFromCategory } from '../actions';
import '../css/Categories.css';

class Categories extends React.Component {
    state = {};   

    componentDidMount(){
        this.props.selectCategory();
    }

    onCategoryClick = (category_id) => {
        //console.log(this.props);
        this.props.selectProductFromCategory(category_id,1);
    }

    render(){  
        //console.log(this.props.categories);
        return (
            this.props.categories.map(category => {
                return(
                    <li className="item" key={category.category_id} onClick = {() => this.onCategoryClick(category.category_id)}>
                            {category.name}
                    </li> 
                )
            })
        )
    }
}

const mapStateToProps = (state) => {    
    //console.log(state);
    return {categories: state.categories};
}

export default connect(mapStateToProps, { selectCategory, selectProductFromCategory })(Categories);