import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import "../App.css";


class BrandProfile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div>
                <div className="welcome-user">
                    <div className="text-center">
                        <h4>
                            <b>welcome, </b> {user.name.split(" ")[0]}
                         
                        </h4>
                        <button className="btn btn-submit"  onClick={this.onLogoutClick}>
                            logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

BrandProfile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(BrandProfile);