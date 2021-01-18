import React, {useState} from 'react'
import '../css/header.scss';
import logo from '../asset/logo.png';
import { useSelector } from 'react-redux';
import { selectMode } from '../features/display/displaySlice';

const HeaderAuth = () => (
    <div id="header-auth">
        <button id="signup-button"> Sign up </button>
        <button id="login-button"> Login </button>
    </div>
)

const HeaderNav = () => (
    <div id="header-nav">
        <ul className="text-align-left" id="nav-games">
            <li>Home</li>
            <li>RPG</li>
            <li>Arcade</li>
            <li>Brain Games</li>
        </ul>
        <ul className="text-align-left" id="nav-support">
            <li>Support</li>
            <li>Contact Us</li>
        </ul>
    </div>
)

export const Header = () => {
    
    const mode = useSelector(selectMode)
    const [isActive, toggleActive] = useState(false)
    
    return (
        <header className={mode} id="header-wrapper">
            <img id="header-logo" src={logo} alt="company logo"/>
            {
                mode=="pc"? (
                    <React.Fragment>
                        <HeaderAuth/>
                        <HeaderNav/>
                    </React.Fragment>)
                : (
                    <React.Fragment>
                        {isActive ? (
                            <React.Fragment>
                                <div id="panel">
                                    <HeaderAuth />
                                    <HeaderNav />
                                </div>
                                <button className="panel-button" onClick={()=>toggleActive(!isActive)}> X </button>
                            </React.Fragment>
                        ) : null}
                        <div><button className="panel-button" onClick={()=>toggleActive(!isActive)}> === </button></div>
                    </React.Fragment>
                )
            }
        </header>

    )
}