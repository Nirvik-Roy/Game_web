import React from 'react'
import './Testimonials.css'
import TestimonialSlider from './TestimonialSlider'
const Testimonials = () => {
  return (
    <>
      <div className='testimonials_wrapper'>
        <div className='container testimonials_content_wrapper'>
            <h1 className='heading'>Testimonials</h1>
            <p>See what students are saying about our courses.</p>
            <TestimonialSlider/>
        </div>
      </div>
    </>
  )
}

export default Testimonials
