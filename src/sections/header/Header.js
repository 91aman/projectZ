import React from "react";
import Greenbackground from '../../images/Greenbackground.jpg';

import SnowStorm from 'react-snowstorm';

import Logo from "../../images/logo.png";

import "./header.css";

const HeaderBackgroundImage = () => {
    return (
        <div className="h-full w-full header-background-image-container">
         <img src={Greenbackground} className="header-background-image h-full w-full"/>
      </div>
    )
}

const HeaderBody = () => {
    return (
        <div className="header-body-contianer">
             {/* <img src={Logo} className="header-logo"/> */}
             <div className="header-name">Aman & Apurva</div>
             <div className="header-marriage-text">We're Getting Married</div>
        </div>
    )
}

const HeaderFooter = () => {
    return (
        <div className="header-footer-container">
            <div className="save-the-date-text">Save the date</div>
            <div>22 April 2021</div>
        </div>
    )
}


const HeaderSection = () => {
    return <div className="header-section-container h-full w-full">
        <SnowStorm 
           // snowCharacter="&#x2661;"
           // flakeWidth={300}
            //flakeheighth={30}
            snowStick={false}
        />
             <HeaderBackgroundImage />
             <HeaderBody/>
             <HeaderFooter/>

        </div>
}

export default HeaderSection;