import React from 'react';
import { connect } from 'react-redux';
import { selectDepartment, selectCategoryFromDepartment, selectProductFromDepartment } from '../actions';
import '../css/Departments.css';
import SearchBar from './SearchBar';


class Departments extends React.Component {
    state = {data:'',pageInfo:''}; ; 

    componentDidMount(){
        this.props.selectDepartment();
    }

    onDepartmentClick = (department_id) => {
        //console.log(this.props);
        this.props.selectCategoryFromDepartment(department_id);   
        this.props.selectProductFromDepartment(department_id,1);
    }

    renderList(){
        return this.props.departments.map(department => {
            return(
            <div className="ui item menu" key={department.department_id}>
                <li className="item" onClick = {() => this.onDepartmentClick(department.department_id)}>
                    {department.name} 
                </li>
            </div>
            )
        })
    }

    render(){  
        //console.log(this.props.departments);
        return (
            <div className="ui secondary menu" >
                <div className="ui red label">
                    <h1 className={`logo`}>SHOPMATE</h1>
                </div>
                <div className="item">
                    {this.renderList()}
                </div>
                <div className="right menu">
                    <SearchBar />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return { departments: state.departments };
}

export default connect(mapStateToProps, { selectDepartment, selectCategoryFromDepartment, selectProductFromDepartment })(Departments);
