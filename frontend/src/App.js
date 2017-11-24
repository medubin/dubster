import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Navbar from './navbar/components/navbar';
import Modal from './modal/components/modal'
import './common/scss/app.css'
import { getCurrentUser } from './user/actions/user_actions'

const mapStateToProps = ({user}) => ({
  userFetched: user.userFetched,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: user => dispatch(getCurrentUser(user)),
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCurrentUser(); // TODO it flashes the login screen. I need to figure that outs
  }

  render() {
    return (
      <div className='app-container'>
        <header>
          <Navbar />
        </header>
        <Modal />
        <div className='body-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
