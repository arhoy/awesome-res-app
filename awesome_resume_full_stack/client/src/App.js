import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
  // import { clearCurrentProfile } from './actions/profileActions';


import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import CreateProfilePage from './pages/CreateProfilePage'

import './sass/main.scss';



// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
       // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
    <Provider store = {store}>
      <Router>
        <React.Fragment>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={DashboardPage} />
          <PrivateRoute exact path="/create-profile" component={CreateProfilePage} />
          <Route exact path = "/login" component = {LoginPage}/>
          <Route exact path = "/register" component = {RegisterPage}/>
          <Route exact path = "/" component = {HomePage}/>
        </Switch>
        </React.Fragment>
      </Router>
    </Provider>
        
      
    );
  }
}

export default App;
