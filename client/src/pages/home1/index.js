import React from "react";

import Logo from "../img/logo.png";
// eslint-disable-next-line 
import Hero from "../img/hero-notext.png";
// eslint-disable-next-line 
import Hero2 from "../img/influencer-why-1.png";
// eslint-disable-next-line 
import Hero3 from "../img/brand-why-1.png";
import "./style.css";
import Iphone from "../img/phone_iphone-24px.svg"
import BarChart from "../img/bar_chart-24px.svg"
import Cash from "../img/monetization_on-24px.svg"



function About() {
  return (
    <div>

      {/* navbar */}
      <div className="navbar ">
        <a className="navbar-brand" href="/">
          <img className="the-logo " src={Logo} width="150px" alt="" />
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link sign-in" href="/login"><h4>sign in</h4></a>
          </li>
        </ul>

      </div>

      {/* ​hero */}
      <div className="earnings clearfix">
        <div className="container">
          <div className="col-sm-12 col-xs-12 earning-vertical-align">
            <div className="earnings-content">
              <h1 className="hero1-text"><span className="erato-italic">take control</span> of the</h1>
              <h1 className="hero1-text">new age of e-commerce</h1>

              <a className="btn btn-1 desktop-btn" href="/" data-toggle="modal" data-target="#myModal"> <span class = "text-center">get started</span> </a>
              <a className="btn btn-submit-2 mobile-btn" href="/" data-toggle="modal" data-target="#myModal"> <span class = "text-center">get started</span> </a>


            </div>
          </div>
        </div>
      </div>


      {/* mission */}
      <div className="container">
        <div className="row">
          <h3 className="mission erato-italic">our mission</h3>
        </div>
        <div className="row">
          {/* our mission paragraph */}
          <p className="wecreated">we created <span className="erato-italic">in</span><span className="erato">fluent</span>  to seamelessy connect brands and influencers. in order to do this, we empower brands to market themselves the way they see fit to prospective influencers, who in turn can view potential brands with which to work. within this propreitary marketplace is where the magic happens, innovative new products get paired with the bleeding edge of social networking personalities, to stay one step ahead in the new age of e-commerce.</p>
        </div>

        {/* //container div for icons*/}
      </div>

      <div className="container icons">

        {/* icon row  */}
        <div className="row ">
          <div className="col-4 ">
            <img className="iphone" src={Iphone} alt="iphone icon"
            />
            <p className="iconP">connect with both influencers and brands looking to advertise and showcase their products</p>
          </div>

          <div className="col-4 ">
            <img className="cash" src={Cash} alt="money icon"
            />
            <p className="iconP">watch your profits grow as followers engage with your advertisement.</p>
          </div>

          <div className="col-4 ">
            <img className="barchart" src={BarChart} alt="barchart icon"
            />
            <p className="iconP">exposure through high engagement influencers increases the reach of your brand, creating sustainable growth</p>
          </div>
        </div>

      

      </div>






      <div class="row why-inf">
          <div className="col-12">
            <h2 className="text-center"><span className="erato-italic">why in</span>fluent?</h2>
          </div>
        </div>

      {/* heroes */}
      {/* influencer  */}

      <div class="clearfix">

        <div className="earnings-2 ">
          <div className="container">
            <div className="col-sm-12 col-xs-12 earning-vertical-align">
              <div className="earnings-2-content">
                {/* <a href="/registerinf" className="btn startbtn">get started</a> */}
                <h1 className="hero2-text">influencers</h1>
                <h1 className="hero2-text-p">- connect with brands</h1>
                <h1 className="hero2-text-p">- engage your followers</h1>
                <h1 className="hero2-text-p">- monetize your online presence</h1>
                <a href="/registerinf" className="btn startbtn desktop-btn">get started</a>
                <a href="/registerinf" className="btn btn-submit-3 mobile-btn">get started</a>

              </div>
            </div>
          </div>
        </div>

        <div className="earnings-3 ">
          <div className="container">
            <div className="col-sm-12 col-xs-12 earning-vertical-align">
              <div className="earnings-3-content">
                {/* <a href="/registerinf" className="btn startbtn">get started</a> */}
                <h1 className="hero2-text">brands</h1>
                <h1 className="hero2-text-p">- link with trending personalities</h1>
                <h1 className="hero2-text-p">- broaden reach to new markets</h1>
                <h1 className="hero2-text-p">- increase profits</h1>
                <a href="/registerbrand" className="btn startbtn2 desktop-btn">get started</a>
                <a href="/registerbrand" className="btn btn-submit-4 mobile-btn">get started</a>

              </div>
            </div>
          </div>
        </div>






      </div>


    


      {/* <div className="row">

        <img className="foot" src={Logo} alt="" />

      </div> */}



      {/* <!-- Modal --> */}
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered">

          {/* <!-- Modal content--> */}
          <div class="modal-content">



            <div class="modal-body">
              <div className="">
                <div className="">
                  <div className="">
                    <div className="text-center">

                      <h1 className="proxima">register</h1>
                      <p className="lead">are you a brand or an influencer?</p>
                      <p className="lead">
                        <a href="/registerbrand"><button className="btn btn-submit " >brand</button></a>
                        <p> </p>
                        <a href="/registerinf"><button className="btn btn-submit">influencer</button></a>
                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
export default About;