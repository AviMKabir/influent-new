import React, { Component } from 'react';
import Ads from "./ads";
import BrandProfile from "./BrandProfile";



class ProfileComponent extends Component {

    render() {
        return (
            <div>
                <BrandProfile />

                <Ads />
            </div>


        )

    }

}




export default ProfileComponent;
