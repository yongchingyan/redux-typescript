import React from 'react'
import '../css/footer.scss'
import logoSmall from '../asset/logo-small.png'

export const Footer = () => {
    return(
        <footer id="footer">
            <div id="footer-wrapper">
            <img src={logoSmall} alt="company-logo-small"/>
            <div>
                <ul>
                <span>Contact Us</span>
                <li>Help Center</li>
                <li>The Group</li>
                <li>Affliates</li>
                </ul>
            </div>
            <div>
                <ul>
                <span>Information</span>
                <li>Terms & Conditions</li>
                <li>Payment methods</li>
                <li>Bonus Terms</li>
                <li>Responsible Gaming</li>
                </ul>
            </div>
            </div>
        </footer>
    )
}