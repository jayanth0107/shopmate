import React from 'react';
import { connect } from 'react-redux';
import '../css/Pagination.css';
import { selectProduct, selectProductFromCategory, selectProductFromDepartment } from '../actions';

class Pagination extends React.Component {

    constructor(props){
        super(props);
        this.searchingFor = this.searchingFor.bind(this);
    }

    componentDidMount(){        
        if(document.getElementsByClassName('pageNoStart').length > 0){
            if(document.getElementsByClassName('pageNoStart')[0])
                document.getElementsByClassName('pageNoStart')[0].childNodes[0].className = 'item active';  
        }       
    }

    componentDidUpdate(){
        if(document.getElementsByClassName('pageNoStart').length > 0){
            if(document.getElementsByClassName('pageNoStart')[0])
                document.getElementsByClassName('pageNoStart')[0].childNodes[0].className = 'item active';    
                
            for(let i=1; i<6; i++)   {
                if(document.getElementsByClassName('pageNoStart')[0].childNodes[i].className === 'item active')
                {
                    document.getElementsByClassName('pageNoStart')[0].childNodes[0].className = 'item'; 
                }
            }
        }
    }

    searchingFor(term){
        return function(x){
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }    

    onPageClick = (event, pageNo) => {        
        
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
        const {search,products} = this.props;
        let  finalProductList = [];

        const noOfProductsPerPage = 20;  // 20 product cards per page
        let pageCount;

        if(search){
            pageCount = Math.ceil(this.props.count / noOfProductsPerPage);            
        }
        
        else if(search[search.length-1].searchTerm> 0) {
               const searchTerm =
               search[search.length - 1].searchTerm;
              
               finalProductList = products.filter(
                 this.searchingFor(searchTerm)
               );
               
               pageCount = Math.ceil(
                 finalProductList.length / noOfProductsPerPage
               );
        } 
        
        let pages = [];
        for(let i=1 ; i<= pageCount; i++) {
            pages.push(i);
        }

        if(pages.length === 0){
            return (
                <li className='item' onClick = {(event) => this.onPageClick(event,1)}>  1     </li>  
            )

        } else {
            return (                
                pages.map((page, index) =>                 
                    
                        <li key={index} className='item' onClick = {(event) => this.onPageClick(event,page)}>
                                    {page}
                        </li>                       
                )
            )
        }
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return { count: state.products.data.count, 
             departmentId: state.products.departmentId,
             categoryId: state.products.categoryId,
             products: state.products.data.rows,
             search:state.search
     };
}

export default connect(mapStateToProps, {selectProduct, selectProductFromCategory, selectProductFromDepartment })(Pagination);
