import React from 'react'
import './Header.css'
import logo from '../../assets/Game_X-removebg-preview 1.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav className='header_main_wrapper'>
                <div className='container nav_content_wwrapper'>
                    <img className='header_logo' src={logo}/>
                    <div className='header_links_wrapper'>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>

                        <NavLink>Packages</NavLink>

                        <NavLink>Gallery</NavLink>

                        <NavLink>Contact</NavLink>

                    </div>
                    <button className='log_in_btn'>Log In</button>
                </div>
            </nav>
        </>
    )
}

export default Header
