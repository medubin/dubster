import React from 'react';
import { connect } from 'react-redux';
import NewField from './new_field';
import * as Type from '../../constants/type';
import {createType} from '../../actions/type_actions'
import { withRouter } from 'react-router-dom';



const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    createType: typeData => dispatch(createType(typeData))
  });
  
  

class CreateType extends React.Component {
    constructor(props) {
        super(props)
        this.addNewFieldCallback = this.addNewFieldCallback.bind(this);
        this.state = {
            category:'',
            name:'',
            fieldTypes: []
        }
        this.submitType = this.submitType.bind(this)
    }

    addNewFieldCallback(category, name, limit) {
        let newfieldTypes = this.state.fieldTypes.concat([
            {
                category: category,
                name: name,
                limit: limit
            }

        ]);
        this.setState({fieldTypes: newfieldTypes});
    }

    deleteFieldType(event, idx) {
        event.preventDefault();
        let newfieldTypes = this.state.fieldTypes.slice();
        newfieldTypes.splice(idx, 1);
        this.setState({fieldTypes: newfieldTypes});
    }

    submitType(event) {
        event.preventDefault();
        this.props.createType(this.state)

    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    renderSelectTypeCategory() {
        return (
            <select value={this.state.category} onChange={this.update('category')}>
                <option value='' disabled selected>SELECT</option>
                <option value={Type.THING}>{Type.THING} </option>
                <option value={Type.STORY}>{Type.STORY} </option>
            </select>
        );
        
    }

    renderTypeFields() {
        return this.state.fieldTypes.map((el, idx) => {
            return (
                <div key={idx}>
                    <span>category: {el.category} </span>
                    <span>name: {el.name} </span>
                    <span>limit: {el.limit} </span>
                    <button onClick={(e) => this.deleteFieldType(e,idx)}>delete</button>
                </div>
            );

        }, this)
    }


    render() {
        return ( 
            <div> 
                {this.renderSelectTypeCategory()}
                <label>Name</label>
                <input onChange={this.update('name')} value={this.state.name}></input>
                <button onClick={this.submitType}>submit</button>
                {this.renderTypeFields()}
                <NewField addNewFieldCallback ={this.addNewFieldCallback}/>
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(CreateType));