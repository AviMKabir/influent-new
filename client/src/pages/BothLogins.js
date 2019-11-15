import React, { Component } from 'react';
// import LoginBrand from "./LoginBrand";
// import LoginInfluencer from "./LoginInfluencer";
import {withRouter} from 'react-router-dom';



class BothLogins extends Component {

    render() {
        return (
            <div>
           <a href="/loginbrand"><button className="btn" >Brand Login</button></a>
            <a href="/logininf"><button className="btn">influencer log</button></a>
            </div>


        )

    }

}




export default withRouter(BothLogins);