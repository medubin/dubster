import React from 'react';
import * as TypeField from '../../constants/type_field'

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

    renderSelectFieldType() {
        return (
            <select value={this.state.category} onChange={this.update('category')}>
                <option value='' disabled selected>SELECT</option>
                <option value={TypeField.PERSON}>{TypeField.PERSON} </option>
                <option value={TypeField.THING}>{TypeField.THING} </option>
                <option value={TypeField.STORY}>{TypeField.STORY} </option>
                <option value={TypeField.DATE}>{TypeField.DATE} </option>
                <option value={TypeField.TEXT}>{TypeField.TEXT} </option>
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
                {this.renderSelectFieldType()}
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
