import React from 'react';
import { connect } from 'react-redux';
import {getTypes} from '../../actions/type_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({type}) => ({
    types: type.types
});

const mapDispatchToProps = (dispatch) => ({
    getTypes: () => dispatch(getTypes())
  });


class ViewTypes extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getTypes();
    }

    renderTypes() {
        return this.props.types.map( (el, idx) => {
            return (
                <div key={idx}>
                <span>category: {el.category}, </span>
                <span>name: {el.name}</span>
                </div>
            );
        });
    
    }

    render() {
        console.log(this.props.types);
        return <div>{this.renderTypes()}</div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ViewTypes));