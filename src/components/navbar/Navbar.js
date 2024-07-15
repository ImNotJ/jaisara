import React, { useState } from 'react';
// import { BiSearch } from 'react-icons/bi';
// import { BsPerson } from 'react-icons/bs';
// import { HiOutlineMenuAlt4 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setActive(!active);
    };

    return (
        <div className="navbar">
            <div className="start-button">
                <button 
                    className={active ? 'active' : ''} 
                    onClick={handleNav}>
                    Start
                </button>
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
