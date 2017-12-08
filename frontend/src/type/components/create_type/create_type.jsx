import React from 'react';
import { connect } from 'react-redux';
import NewField from './new_field';

const mapStateToProps = () => ({
});
  
const mapDispatchToProps = (dispatch) => {

}
  

class CreateType extends React.Component {
    constructor(props) {
        super(props)
        this.addNewFieldCallback = this.addNewFieldCallback.bind(this);
        this.state = {
            fieldTypes: []
        }
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

    renderTypeFields() {
        return this.state.fieldTypes.map(function(el, idx) {
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
                {this.renderTypeFields()}
                < NewField addNewFieldCallback ={this.addNewFieldCallback}/>
           </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateType);