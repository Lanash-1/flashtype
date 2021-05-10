import React from 'react';
import './../Nav/Nav.css';
import logo from './../../Assets/logo.png';

const Nav = () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="flash-logo"/>
                <p className="flash-logo-test">FlashType</p>
            </div>
            <div className="nav-right">
                <a 
                href="https://linkedin.com/in/lanash-d/" 
                target="_blank" 
                rel="noreferrer"
                className="nav-linkedin-link">
                    Know Me?
                </a>
            </div>
        </div>
    )
}

export default Nav;