import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import LoginBrand from "./LoginBrand";
// import LoginInfluencer from "./LoginInfluencer";
import { withRouter } from 'react-router-dom';



class BothLogins extends Component {

    render() {
        return (


            <div className="page-bg-bothlogins">






                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-6 mx-auto">
                            <div className="jumbotron text-center">

                            <div className="text-center">

                            <h1 className="display-4 proxima">login</h1>
                                <p className="lead">are you a brand or an influencer?</p>
                                <p className="lead">
                                    <a href="/loginbrand"><button className="btn btn-submit " >brand</button></a>
                                    <p> </p>
                                    <a href="/logininf"><button className="btn btn-submit">influencer</button></a>
                                </p>

                            </div>


                              


                                <Link to="/" className="">
                                <i class="la la-home homeicon"></i>
                        </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>




        )

    }

}




export default withRouter(BothLogins);