import React from 'react'
import '../css/header.css';
import logo from '../asset/logo.png';

export const Header = () => {
    return (
        <header id="header-wrapper">
            <img id="header-logo" src={logo} alt="company logo"/>
            <div id="header-auth">
            <button id="signup-button"> Sign up </button>
            <button id="login-button"> Login </button>
            </div>
            <div id="header-nav">
            <ul id="nav-games">
                <li>Home</li>
                <li>RPG</li>
                <li>Arcade</li>
                <li>Brain Games</li>
            </ul>
            <ul id="nav-support">
                <li>Support</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </header>
    )
}