import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';
import '../css/Categories.css';

class Categories extends React.Component {
    state = {};   

    componentDidMount(){
        this.props.selectCategory();
    }

    renderList(){       

        return this.props.categories.map(category => {
            return(
                <a className="item" key={category.category_id}>
                        {category.name}
                </a> 
            )
        })
    }

    render(){  
        console.log(this.props.categories);
        return (
            
                <div className="ui bottom attached segment pushable">
                    <div className="ui visible inverted left vertical sidebar menu">
                            {this.renderList()}        
                    </div>
                    <div className="pusher">
                        <div className="ui basic segment">
                            <h3 className="ui header">Application Content</h3>
                            <p></p>
                            
                        </div>
                    </div>
                </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories};
}

export default connect(mapStateToProps, { selectCategory })(Categories);