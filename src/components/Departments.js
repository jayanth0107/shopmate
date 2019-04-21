import React from 'react';
import { connect } from 'react-redux';
import { selectDepartment } from '../actions';
import '../css/Departments.css';

class Departments extends React.Component {
    state = {}; 

    componentDidMount(){
        this.props.selectDepartment();
    }

    renderList(){
        return this.props.departments.map(department => {
            return(
            <div className="ui item menu" key={department.department_id}>
                <a className="item">{department.name} </a>
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
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { departments: state.departments };
}

export default connect(mapStateToProps, { selectDepartment })(Departments);
