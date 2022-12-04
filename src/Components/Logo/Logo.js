import React from 'react';
import Tilt from 'react-parallax-tilt'
import "./Logo.css"
import face from "./face.png";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="logo" glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                <div className="center pa3">
                    <img style={{height: "125px" }} alt ="logo" src={face}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;