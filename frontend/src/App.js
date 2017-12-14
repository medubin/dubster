import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './common/scss/app.css'
import { getCurrentUser } from './user/actions/user_actions'


// Components
import CreateType from './type/components/create_type/create_type';
import UserForm from './user/components/user_form';
import Modal from './modal/components/modal';
import Navbar from './navbar/components/navbar';
import ViewTypes from './type/components/view_types/view_types';

const mapStateToProps = ({user}) => ({
  userFetched: user.userFetched,
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: user => dispatch(getCurrentUser(user)),
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCurrentUser();
  }


  render() {
    return (
      <div className='app-container'>
        <header>
          <Navbar />
        </header>
        <Modal />
        <div className='body-container'>
          <Switch>
            <Route path="/login" component={UserForm} />
            <Route path="/signup" component={UserForm} />
            <Route path="/type/new" component={CreateType} />
            <Route path="/type/" component={ViewTypes} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
