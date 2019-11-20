import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions2';
import classnames from 'classnames';
import "./style.css";


class RegisterInfluencer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) this.props.history.push("/dashboard");
        
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        // console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }

    

    render() {
        const { errors } = this.state;

        return (



            <div className="page-bg-reginf" >
            <div className="container" 
            // style={{backgroundColor: 'blue'}}
            >
                
                <div className="text-center  p-5">
                    <div className="">
                    <p className="">
                                 <Link to="/">
                                 <i class="la la-home homeicon"></i>

                                 </Link>

                                 
                            </p>
                        <div className="" >
                            <h4 className  = "proxima head-1">
                                <b>Influencer</b> Register
                            </h4>
                            <p className="inf-register-p">
                                already have an account? <Link to="/loginbrand">login</Link>
                            </p>
                        </div>
                        <form className="  " noValidate onSubmit={this.onSubmit}>
                            <div className="form-group text-center">
                                {/* eslint-disable-next-line */}
                                <input className="form-control " placeholder="Name"  onChange={this.onChange} value={this.state.name} error={errors.name} name="name" type="text" className={classnames("", { invalid: errors.name })} />
                                <label htmlFor="name"></label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="form-group text-center ">
                                {/* eslint-disable-next-line */}
                                <input className="form-control mb-4" placeholder="E-mail" onChange={this.onChange} value={this.state.email} error={errors.email} name="email" type="email" className={classnames("", { invalid: errors.email })} />
                                <label htmlFor="email"></label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="form-group text-center ">
                                  {/* eslint-disable-next-line */}
                                <input className="form-control mb-4" placeholder="Password" onChange={this.onChange} value={this.state.password} error={errors.password} name="password" type="password" className={classnames("", { invalid: errors.password })} />
                                <label htmlFor="password"></label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="form-group text-center ">
                                  {/* eslint-disable-next-line */}
                                <input className="form-control mb-4" placeholder="Confirm Password" onChange={this.onChange} value={this.state.password2} error={errors.password2} name="password2" type="password" className={classnames("", { invalid: errors.password2 })} />
                                <label htmlFor="password2"></label>
                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="" style={{ paddingLeft: "11.250px" }}>
                                <button className="btn btn-submit"  type="submit">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

RegisterInfluencer.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterInfluencer));