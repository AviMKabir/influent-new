import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import RegisterInfluencer from "./pages/RegisterInfluencer";
import RegisterBrand from "./pages/RegisterBrand";
import LoginInfluencer from "./pages/LoginInfluencer";
import LoginBrand from "./pages/LoginBrand";
import Market from "./pages/Market";
import BrandProfile from "./pages/BrandProfile";



function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/registerinf" component={RegisterInfluencer} />
          <Route exact path="/registerbrand" component={RegisterBrand} />
          <Route exact path="/logininf" component={LoginInfluencer} />
          <Route exact path="/loginbrand" component={LoginBrand} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/profile" component={BrandProfile}/>
      </div>
    </Router>
  );
}

export default App;
