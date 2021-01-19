import React, {useState, useEffect} from 'react'
import '../css/header.scss';
import logo from '../asset/logo.png';
import { useSelector } from 'react-redux';
import { selectMode } from '../features/display/displaySlice';
import Close from '../asset/close.png'
import Dropdown from '../asset/dropdown.png'
import { url } from 'inspector';

const HeaderAuth = () => (
    <div id="header-auth">
        <button id="signup-button"> Sign up </button>
        <button id="login-button"> Login </button>
    </div>
)

const HeaderNav = () => (
    <div id="header-nav">
        <ul className="text-align-left with-indicator" id="nav-games">
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

// https://css-tricks.com/creating-an-animated-menu-indicator-with-css-selectors/


export const Header = () => {
    
    const mode = useSelector(selectMode)
    const [isActive, toggleActive] = useState(false)

    useEffect(()=>{
        if ( mode!="mobile" && isActive) {
            toggleActive(!isActive)
        }
    })
    
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
                                <button className="panel-button" onClick={()=>toggleActive(!isActive)} style={{"backgroundImage": `url(${Close})`}}/>
                            </React.Fragment>
                        ) : <div><button className="panel-button" onClick={()=>toggleActive(!isActive)} style={{"backgroundImage": `url(${Dropdown})`}}/></div>}
                    </React.Fragment>
                )
            }
        </header>

    )
}