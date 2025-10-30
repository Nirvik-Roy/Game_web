import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import facebook from '../../assets/Vector.png'
import twitter from '../../assets/Vector (1).png'
import insta from '../../assets/social.png'
import tube from '../../assets/social (1).png'
const Footer = () => {
  return (
    <>
      <footer className='footer_wrapper'>
        <div className='container footer_content_wrapper'>
          <div className='footer_1 footer_div'>
            <h3>About Us</h3>
            <p>Master game development with fun,
              interactive lessons! Create your own Roblox
              and Scratch games while<br /> learning coding <br /> fundamentals. </p>
          </div>
          <div className='footer_2 footer_div'>
            <h3>Company</h3>
            <Link>About Us</Link>
            <Link>FAQ</Link>
            <Link>Testimonials</Link>
            <Link>Blog</Link>
            <Link>Contact Us</Link>
            <Link>Careers</Link>
          </div>
          <div className='footer_3 footer_div'>
            <h3>Courses for Kids</h3>
            <Link>Roblox Game Design</Link>
            <Link>Advanced Roblox Scripting</Link>
            <Link>Scratch Game Design</Link>
          </div>
           <div className='footer_3 footer_div'>
            <h3>Courses for Adults</h3>
            <Link>Digital Skills for Educators</Link>
            <Link>Online Essential Skills</Link>
          </div>
          <div className='footer_4 footer_div'>
            <h3>Join Us</h3>
            <div className='social_links_Wrapper'>
              <img src={facebook}/>
              <img src={twitter}/>
              <img src={insta}/>
              <img src={tube}/>
            </div>
          </div>
        </div>
        <div className='copyright_div'>
          <p>Game X @ 2025. All rights reserved | Designed by Web Prism Dynamics</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
