import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
const Menu = () => {
    // const d = new Date().getDate();
    const [date, updateDate] = useState(Date());
    
    const showMenu = ()=>{
        var menu = document.querySelector('.menu');
        menu.classList.add('show-menu');
    }
    const closeMenu = ()=>{
        var menu = document.querySelector('.menu');
        menu.classList.remove('show-menu');
    }
    // setInterval(() => {
    //     updateDate(Date());
    // }, 1000);
    return (
        <nav>
            <div id='circle'>

            </div>
            <div id='my-title' className='txt-white'>
                PARAS KALYAN
            </div>
            <div className='menu'>
                <button id='close-btn' className='btn' onClick={closeMenu}><FontAwesomeIcon icon={faClose} size='2x'/></button>
                <ul>
                    <li><Link className="menu-item" to='/'>HOME</Link></li>
                    <li><Link className="menu-item" to='/about'>ABOUT</Link></li>
                    <li><Link className="menu-item" to='/products'>PROJECTS</Link> </li>
                </ul>
            </div>
            <div className='mob-menu'>
                <button className='menu-btn btn' onClick={showMenu}><FontAwesomeIcon icon={faBars} size='2x' /></button>
            </div>
        </nav>
    )

}
export default Menu;