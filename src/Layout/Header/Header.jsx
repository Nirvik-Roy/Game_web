import React, { Activity, useState } from 'react'
import './Header.css'
import logo from '../../assets/Game_X-removebg-preview 1.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
    const [active, setActive] = useState(false);
    const [sidebar,setSidebar]=useState(false)

    const scrollFunc = () => {
        if (window.scrollY > 50) {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    window.addEventListener('scroll', scrollFunc)
    return (
        <>
            <nav className={active ? 'header_active_wrapper' : 'header_main_wrapper'}>
                <div className='container nav_content_wwrapper'>
                    <img className='header_logo' src={logo} />
                    <div className='header_links_wrapper'>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>

                        <NavLink>Packages</NavLink>

                        <NavLink>Gallery</NavLink>

                        <NavLink>Contact</NavLink>

                    </div>
                    <button className='log_in_btn'>Log In</button>
                    <i onClick={(()=>setSidebar(!sidebar))} class="fa-solid fa-bars"></i>
                </div>
            { <Activity mode={sidebar ? 'visible' :'hidden'}>
                <div className='responsive_navbar'>
                <i class="fa-solid fa-caret-left" onClick={(()=>setSidebar(!sidebar))} style={{
                    position:'absolute',
                    top:'0',
                    right:'-10px',
                    fontSize:'25px',
                    color:'#fff'
                }}></i>
                    <img className='header_logo' src={logo} />
                    <div className='header_links_wrapper'>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>

                        <NavLink>Packages</NavLink>

                        <NavLink>Gallery</NavLink>

                        <NavLink>Contact</NavLink>

                    </div>
                    <button style={{
                        zIndex: '9999'
                    }} className='log_in_btn'>Log In</button>
                </div>
            </Activity>   }
            </nav>


        </>
    )
}

export default Header
