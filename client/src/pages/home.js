import React from "react";
import Logo from "./img/influent-logo-vector.svg";
// eslint-disable-next-line 
import Hero from "./img/hero-notext.png"



function About() {
    return (
        <div>

<nav className="navbar ">
  <a className="navbar-brand" href="/">
    <img src={Logo} width="150"  alt=""/>
  </a>

  <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link sign-in" href="/"><h4>sign in</h4></a>
            </li>
        </ul>

</nav>


<div className="earnings clearfix">
	<div className="container">
		<div className="col-sm-6 col-xs-12 earning-vertical-align">
			<div className="earnings-content">
				<h1>take control of the</h1>
        <h1>new age of e-commerce</h1>

				<a className="btn-oval white" href="https://www.repostnetwork.com/apply.html">Get Started</a>
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