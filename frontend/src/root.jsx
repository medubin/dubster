import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// react components
import App from './App'
import UserForm from './user/components/user_form'

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().user.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().user.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={store}>
       <Router history={browserHistory}>
         <Route path="/" component={App}> 
            <Route path="/login" component={UserForm} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={UserForm} onEnter={_redirectIfLoggedIn} />
         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
