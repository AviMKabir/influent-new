import React, { Component } from 'react';
import RegisterBrand from "./RegisterBrand";
import RegisterInfluencer from "./RegisterInfluencer";

class BothRegisters extends Component {

    render() {
        return (
            <div>
                <RegisterBrand />

                <RegisterInfluencer />
            </div>


        )

    }

}




export default BothRegisters;