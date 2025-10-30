import React from 'react'
import './UnlockPotential.css'
import Event from './Event'
import img from '../../../assets/3d-flat-cartoon-children-learning-code-with-tutor-early-tech-education-stem-learning-concept 1.png'
const UnlockPotential = () => {
  return (
    <>
      <div className='unlock_potential_wrapper'>
        <div className='container unlock_potential_content_wrapper'>
            <div className='unlock_left'>
                <img src={img}/>
            </div>
            <div className='unlock_right'>
                <h1>Unlock Your Potential with Fun Learning</h1>
                <p>Discover the joy of coding by creating your own games! With interactive lessons in Roblox and Scratch, you’ll develop essential programming skills while bringing your creative ideas to life. Perfect for beginners and young innovators—learn, play, and code your way to success! </p>
            </div>
        </div>
        <Event/>
      </div>
    </>
  )
}

export default UnlockPotential
