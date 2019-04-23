import React from 'react';
import { connect } from 'react-redux';
import '../css/Pagination.css';
import { selectProduct, selectProductFromCategory, selectProductFromDepartment } from '../actions';

class Pagination extends React.Component {


    onPageClick = (pageNo) => {
        if(this.props.departmentId.length === 0 && this.props.categoryId.length === 0 )
            this.props.selectProduct(pageNo);  
        else if(this.props.departmentId.length > 0)  
            this.props.selectProductFromDepartment(this.props.departmentId, pageNo);
        else if(this.props.categoryId.length > 0)
            this.props.selectProductFromCategory(this.props.categoryId, pageNo);

    }

    render(){  
        //console.log(this.props.departments);
        const pageCount = Math.ceil(this.props.count / 20); // 20 product cards per page
        
        let pages = [];
        for(let i=1 ; i<= pageCount; i++) {
            pages.push(i);
        }

        return (
            
            pages.map((page, index) =>                 
                    
                    <button key={index} className={`item`} onClick = {() => this.onPageClick(page)}>
                                {page}
                    </button>                 
            )
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return { count: state.products.data.count, departmentId: state.products.departmentId, categoryId: state.products.categoryId };
}

export default connect(mapStateToProps, {selectProduct, selectProductFromCategory, selectProductFromDepartment })(Pagination);
