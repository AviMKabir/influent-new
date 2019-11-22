import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions2';
import classnames from 'classnames';
import "./style.css";


class LoginInfluencer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) this.props.history.push("/influencerprofile");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) this.props.history.push("/influencerprofile");

        if (nextProps.errors) {
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

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        // console.log(userData);
        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;

        return (

            <div className="page-bg-logininfluencer" >

                <div className="container">
                    <div >
                        <div className="text-center  p-5">

                            <Link to="/login" className="">
                                <i class="la la-backward"></i>
                            </Link>

                            <Link to="/" className="btn-">
                                <i class="la la-home homeicon"></i>
                            </Link>
                            <div className="" >
                                <h4 className="login-header proxima head-1">
                                    <b>influencer</b> login
                            </h4>

                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group text-center">
                                    {/* eslint-disable-next-line */}
                                    <input className="form-control " placeholder="email" onChange={this.onChange} value={this.state.email} error={errors.email} name="email" type="email" className={classnames("", { invalid: errors.email || errors.emailnotfound })} />
                                    <label htmlFor="email"></label>
                                    <p className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </p>
                                </div>
                                <div className="form-group text-center">
                                    <input placeholder="password" onChange={this.onChange} value={this.state.password} error={errors.password} name="password" type="password" className={classnames("", { invalid: errors.password || errors.passwordincorrect })} />
                                    <label htmlFor="password"></label>
                                    <p className="red-text">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </p>
                                </div>
                                <div className="" >
                                    <button className="btn btn-submit" type="submit">
                                        login
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

LoginInfluencer.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(LoginInfluencer);