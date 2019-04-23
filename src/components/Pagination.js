import React from 'react';
import { connect } from 'react-redux';
import '../css/Pagination.css';
import { selectProduct, selectProductFromCategory, selectProductFromDepartment } from '../actions';

class Pagination extends React.Component {

    componentDidUpdate(){
         document.getElementsByClassName('pageNoStart')[0].childNodes[0].className = 'item active';         
      }

    onPageClick = (event, pageNo) => {
        
        //event.currentTarget.className = 'item active';
        var siblings = [];
        var sibling = event.currentTarget.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1) {
                siblings.push(sibling);
            }
            
            sibling.className = 'item';
            sibling = sibling.nextSibling;
        }
        //console.log(siblings);
        if(this.props.departmentId.length === 0 && this.props.categoryId.length === 0 ) {
            this.props.selectProduct(pageNo);
            event.currentTarget.className = 'item active';  
        }
        else if(this.props.departmentId.length > 0) {
            this.props.selectProductFromDepartment(this.props.departmentId, pageNo);
            event.currentTarget.className = 'item active'; 
        }
        else if(this.props.categoryId.length > 0) {
            this.props.selectProductFromCategory(this.props.categoryId, pageNo);
            event.currentTarget.className = 'item active'; 
        }

    }

    render(){  
        //console.log(this.props.departments);        

        const noOfProductsPerPage = 20;  // 20 product cards per page
        const pageCount = Math.ceil(this.props.count / noOfProductsPerPage);
        
        let pages = [];
        for(let i=1 ; i<= pageCount; i++) {
            pages.push(i);
        }

        return (
            
            pages.map((page, index) =>                 
                
                    <li key={index} className='item' onClick = {(event) => this.onPageClick(event,page)}>
                                {page}
                    </li>   
                             
            )
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return { count: state.products.data.count, departmentId: state.products.departmentId, categoryId: state.products.categoryId };
}

export default connect(mapStateToProps, {selectProduct, selectProductFromCategory, selectProductFromDepartment })(Pagination);
