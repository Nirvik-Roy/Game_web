import React from 'react'
import './BlogPost.css'
import img from '../../../assets/Visual.png'
const FreeTrail = () => {
  return (
    <>
      <div className='free_trail_wrapper'>
        <div className='free_trail_left'>
            <h3>Start Your Free Trial Today and See the Difference!</h3>
            <p>Sign up for a free trial and experience the power of our product for yourself.</p>
            <div className='subscribe_input_button_wrapper'>
                <input placeholder='Your email address…'/>
                <button>Subscribe</button>
            </div>
            <h6>Weekly newsletter only. No spam, unsubscribe at any time.</h6>
        </div>
        <div className='free_trail_right'>
            <img src={img}/>
        </div>
      </div>
    </>
  )
}

export default FreeTrail
