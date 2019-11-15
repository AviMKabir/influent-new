import React from "react";
import Logo from "./img/influent-logo-vector-2.svg";
// eslint-disable-next-line 
import Hero from "./img/hero-notext.png"
import '../App.css';




function About() {
    return (
        <div>

<nav className="navbar ">
  <a className="navbar-brand" href="/">
    <img src={Logo} width="150"  alt=""/>
  </a>

  <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link sign-in" href="/login"><h4>sign in</h4></a>
            </li>
        </ul>

</nav>


<div className="earnings clearfix">
	<div className="container">
		<div className="col-sm-12 col-xs-12 earning-vertical-align">
			<div className="earnings-content">
				<h1 className= "hero1-text"><span className="erato-italic">take control</span> of the</h1>
        <h1 className= "hero1-text">new age of e-commerce</h1>

				<a className="btn btn-1" href="https://www.repostnetwork.com/apply.html"> get started </a>
			</div>
		</div>
	</div>
</div>


            <a href="/loginbrand"><button className="btn" >Brand Login</button></a>
            <a href="/logininf"><button className="btn">influencer log</button></a>
            <a href="/registerbrand"><button className="btn">register brand</button></a>
            <a href="/registerinf"><button className="btn">register influencer</button></a>
            <a href="/profile">profile work pls </a>



        </div>
    );
}

export default About;