import React from 'react';
import { connect } from 'react-redux';
import NewField from './new_field';
import * as Template from '../../constants/template';
import {createTemplate} from '../../actions/template_actions'
import { withRouter } from 'react-router-dom';



const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    createTemplate: templateData => dispatch(createTemplate(templateData))
});
  
  

class CreateTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.addNewFieldCallback = this.addNewFieldCallback.bind(this);
        this.state = {
            category:'',
            name:'',
            fieldTemplates: []
        }
        this.submitTemplate = this.submitTemplate.bind(this)
    }

    addNewFieldCallback(category, name, limit) {
        let newfieldTemplates = this.state.fieldTemplates.concat([
            {
                category: category,
                name: name,
                limit: limit
            }

        ]);
        this.setState({fieldTemplates: newfieldTemplates});
    }

    deleteFieldTemplate(event, idx) {
        event.preventDefault();
        let newfieldTemplates = this.state.fieldTemplates.slice();
        newfieldTemplates.splice(idx, 1);
        this.setState({fieldTemplates: newfieldTemplates});
    }

    submitTemplate(event) {
        event.preventDefault();
        this.props.createTemplate(this.state)

    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    renderSelectTemplateCategory() {
        return (
            <select value={this.state.category} onChange={this.update('category')}>
                <option value='' disabled selected>SELECT</option>
                <option value={Template.THING}>{Template.THING} </option>
                <option value={Template.STORY}>{Template.STORY} </option>
            </select>
        );
    }

    renderTemplateFields() {
        return this.state.fieldTemplates.map((el, idx) => {
            return (
                <div key={idx}>
                    <span>category: {el.category} </span>
                    <span>name: {el.name} </span>
                    <span>limit: {el.limit} </span>
                    <button onClick={(e) => this.deleteFieldTemplate(e,idx)}>delete</button>
                </div>
            );

        }, this)
    }

    render() {
        return ( 
            <div> 
                {this.renderSelectTemplateCategory()}
                <label>Name</label>
                <input onChange={this.update('name')} value={this.state.name}></input>
                <button onClick={this.submitTemplate}>submit</button>
                {this.renderTemplateFields()}
                <NewField addNewFieldCallback ={this.addNewFieldCallback}/>
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(CreateTemplate));