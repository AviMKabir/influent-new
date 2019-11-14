import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import ProfileComponent from './pages/ProfileComponent'

import './App.css';

import Home from "./pages/home"
import RegisterInfluencer from "./pages/RegisterInfluencer";
import RegisterBrand from "./pages/RegisterBrand";
import LoginInfluencer from "./pages/LoginInfluencer";
import LoginBrand from "./pages/LoginBrand";
import Market from "./pages/Market";
import Ads from "./pages/ads"
import PrivateRoute from './pages/private-route/PrivateRoute'


if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
      store.dispatch(logoutUser());
      window.location.href = "./login";
  }
}

class App extends Component {

  render() {

    return (

      <Provider store={store}>
  
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/registerinf" component={RegisterInfluencer} />
          <Route exact path="/registerbrand" component={RegisterBrand} />
          <Route exact path="/logininf" component={LoginInfluencer} />
          <Route exact path="/loginbrand" component={LoginBrand} />
          <Route exact path="/market" component={Market} />
          <Switch>

            <PrivateRoute exact path="/profile" component={ProfileComponent} />

          </Switch>
        </div>
      </Router>
      
      </Provider>
    );

  }


}

export default App;
