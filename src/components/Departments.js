import React from 'react';
import { connect } from 'react-redux';
import { selectDepartment, selectCategoryFromDepartment, selectProductFromDepartment } from '../actions';
import '../css/Departments.css';
import SearchBar from './SearchBar';


class Departments extends React.Component {
    state = {data:'',pageInfo:''}; ; 

        /* On component mount fire api call and load with departments */
    componentDidMount(){
        this.props.selectDepartment();
    }

       /* Invoke actions to load Content Page component with Categories and Products based on the Department id clicked*/ 
    onDepartmentClick = (department_id) => {
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

    /* Returns logo text, departments bar and Search bar components*/ 
    render(){  
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
    return { departments: state.departments };
}

export default connect(mapStateToProps, { selectDepartment, selectCategoryFromDepartment, selectProductFromDepartment })(Departments);
