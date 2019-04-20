import React from 'react';
import { connect } from 'react-redux';
import { selectDepartment } from '../actions';

class Departments extends React.Component {
    state = {}; 

    componentDidMount(){
        this.props.selectDepartment();
    }

    renderList(){
        return this.props.departments.map(department => {
            return(
                <div className="item" key={department.department_id}>
                    <i className="large middle aligned icon user" />

                    <div className="content">
                        <p> {department.name} </p>
                    </div>
                </div>
            )
        })
    }

    render(){  
        //console.log(this.props.departments);
        return (
            <div className="relaxed divided list">
                <h1>SHOPMATE</h1>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { departments: state.departments };
}

export default connect(mapStateToProps, { selectDepartment })(Departments);
