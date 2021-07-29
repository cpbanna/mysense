import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/healthy_logo.JPG';

const Header = () => {
    return (
        <div className='header'>
                <span><Link to="/">HOME</Link></span>
                <span><Link to="/ourmenu">OUR MENU</Link></span>
                <span><Link to="/services">SERVVICE</Link></span>
                <span><Link to="/about">ABOUT</Link></span>
                <span><Link to="/delivery">DELIVERY</Link></span>
                <span><Link to="/reservation">RESERVATION</Link></span>
                <img className='logo' src={Logo}  alt="Healty Food"/>
        </div>
    )
}

export default Header

