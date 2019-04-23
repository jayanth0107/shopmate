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
                <li key={department.department_id} className={`ui pointing item departmentName`} onClick = {() => this.onDepartmentClick(department.department_id)}>
                    {department.name} 
                </li>           
            )
        })
    }

    render(){  
        //console.log(this.props.departments);
        return (
            <div className={`ui pointing menu departmentBar`} >
                <div className={`ui label logo`}>
                    <h1 className={`logoText`}>SHOPMATE</h1>
                </div>
                <span className={`departmentText`}>
                    {this.renderList()}
                </span>
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
