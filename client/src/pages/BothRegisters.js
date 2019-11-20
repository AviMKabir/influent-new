import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import LoginBrand from "./LoginBrand";
// import LoginInfluencer from "./LoginInfluencer";
import { withRouter } from 'react-router-dom';



class BothRegisters extends Component {

    render() {
        return (


            <div className="page-bg-bothlogins">






                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-6 mx-auto">
                            <div className="jumbotron text-center">

                                <h1 className="display-4 proxima">register</h1>
                                <p className="lead">are you a brand or an influencer?</p>

                                    <div className="text-center">

                                    <a href="/registerbrand"><button className="btn-submit " >brand</button></a>
                                    <br></br>
                                    <a href="/registerinf"><button className="btn-submit">influencer</button></a>

                                    </div>
                                
                                <Link to="/" className="btn-">
                                    back to home
                        </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>




        )

    }

}




export default withRouter(BothRegisters);