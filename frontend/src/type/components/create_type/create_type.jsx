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
    }


    render() {
        return ( 
           < NewField/>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateType);