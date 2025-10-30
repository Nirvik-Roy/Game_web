import React from 'react'
import './PerfectCourse.css'
import PerfectCourseSlider from './PerfectCourseSlider'
const PerfectCourse = () => {
    return (
        <>
            <div className='perfect_course_wrapper'>
                <div className='container perfect_course_content_wrapper'>
                    <div className='perfect_course_head_Wrapper'>
                        <h1 className='heading'>Choose the perfect course <br />for you</h1>
                        <p className='heading_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    </div>
                   <PerfectCourseSlider/>
                </div>
            </div>
        </>
    )
}

export default PerfectCourse
