import React from 'react';
import { connect } from 'react-redux';
import { selectCategory, selectProductFromCategory } from '../actions';
import '../css/Categories.css';

class Categories extends React.Component {
    state = {};   

    componentDidMount(){
        
        this.props.selectCategory();  

    }

    onCategoryClick = (event, category_id) => {
        //console.log(this.props);
        var siblings = [];
        var sibling = event.currentTarget.parentNode.firstChild;
        //console.log(sibling);
        while (sibling) {
            if (sibling.nodeType === 1) {
                siblings.push(sibling);
            }
            
            sibling.className = 'item';
            sibling = sibling.nextSibling;
        }
        //console.log(siblings);
        //console.log(i);
        this.props.selectProductFromCategory(category_id,1);
        event.currentTarget.className = 'item active';
    }

    render(){  
        //console.log(this.props.categories);
        return (
            this.props.categories.map(category => {
                return(
                    <li className="item" key={category.category_id} onClick = {(event) => this.onCategoryClick(event, category.category_id)}>
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