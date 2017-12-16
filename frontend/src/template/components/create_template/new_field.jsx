import React from 'react';
import * as TemplateField from '../../constants/template_field'

class NewField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            name: '',
            limit: 0
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    renderSelectFieldTemplateCategory() {
        return (
            <select value={this.state.category} onChange={this.update('category')}>
                <option value='' disabled selected>SELECT</option>
                <option value={TemplateField.PERSON}>{TemplateField.PERSON} </option>
                <option value={TemplateField.THING}>{TemplateField.THING} </option>
                <option value={TemplateField.STORY}>{TemplateField.STORY} </option>
                <option value={TemplateField.DATE}>{TemplateField.DATE} </option>
                <option value={TemplateField.TEXT}>{TemplateField.TEXT} </option>
            </select>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.category && this.state.name) {
            this.props.addNewFieldCallback(this.state.category, this.state.name, this.state.limit);
            this.setState({
                category: '',
                name: '',
                limit: 0
            })
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderSelectFieldTemplateCategory()}
                <label>Name</label>
                <input onChange={this.update('name')} value={this.state.name}></input>
                <label>Limit</label>
                <input type='number' onChange={this.update('limit')} value={this.state.limit}></input>
                <input type="submit" value='add'/>
            </form>
        )
    }   
}


export default NewField;
