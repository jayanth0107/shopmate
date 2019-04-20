
import React from 'react';

class Departments extends React.Component {
    state = {};

    //Fetch all the departments in this lifecycle ethods.
    function componentDidMount()  {
        this.props.getAllDepartments();
    }

    render(){
        this.props.departmnetList

        //render component based on teh above value
        return (
            <div>Departments</div>
        )
    }

    function mapStateToProps(state) {
        return 
        {
            departmentList : this.state.getDepartmentList
        }

        
    }


}

export default connect Departments ;
