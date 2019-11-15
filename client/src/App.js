import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import ProfileComponent from './pages/ProfileComponent'
import InfluencerProfile from './pages/InfluencerProfile'


// import './App.css';
// import './App2.css';



import Home from "./pages/home1"
import RegisterInfluencer from "./pages/registerinfluencer1";
import RegisterBrand from "./pages/registerbrand1";
import LoginInfluencer from "./pages/logininfluencer1";
import LoginBrand from "./pages/loginbrand1";
import BothLogins from "./pages/BothLogins";
import BothRegisters from "./pages/BothRegisters";


import Market from "./pages/Market";
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
          <Route exact path="/login" component={BothLogins} />
          <Route exact path="/register" component={BothRegisters} />
          <Route exact path="/market" component={Market} />
          <Switch>

            <PrivateRoute exact path="/profile" component={ProfileComponent} />
            <PrivateRoute exact path="/influencerprofile" component={InfluencerProfile} />


          </Switch>
        </div>
      </Router>
      
      </Provider>
    );

  }


}

export default App;
