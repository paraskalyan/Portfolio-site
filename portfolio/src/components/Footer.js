import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                Build in React with love <FontAwesomeIcon icon={faHeart} /><br />
                Designed and Developed by:-<br /> Paras Kalyan
            </div>
        </footer>
    )
}

export default Footer;