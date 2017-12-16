import React from 'react';
import { connect } from 'react-redux';
import {getTemplates} from '../../actions/template_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({template}) => ({
    templates: template.templates
});

const mapDispatchToProps = (dispatch) => ({
    getTemplates: () => dispatch(getTemplates())
  });


class ViewTemplates extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getTemplates();
    }

    renderTemplates() {
        return this.props.templates.map( (el, idx) => {
            return (
                <div key={idx}>
                <span>category: {el.category}, </span>
                <span>name: {el.name}</span>
                </div>
            );
        });
    }

    render() {
        return <div>{this.renderTemplates()}</div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(ViewTemplates));