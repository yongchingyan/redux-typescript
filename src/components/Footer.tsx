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
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>The Group</li>
                <li>Affliates</li>
                </ul>
            </div>
            <div>
                <ul>
                <li>Information</li>
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