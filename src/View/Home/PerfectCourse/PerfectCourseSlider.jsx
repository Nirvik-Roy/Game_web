import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './PerfectCourse.css'
import img from '../../../assets/image 174.png'
import img2 from '../../../assets/roblox-10 1.png'
import img3 from '../../../assets/minecraft 1.png'
const PerfectCourseSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className='perfect_course_slider_wrapper'>
                <Slider {...settings}>
                    <div className='perfect_course_slider'>
                        <img src={img} />
                        <h3>Scratch Game Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className='perfect_course_slider slider2'>
                        <img src={img2} />
                        <h3>Roblox Game lvl 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className='perfect_course_slider slider3'>
                        <img src={img3} />
                        <h3>Minecraft Game lvl 1 </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className='perfect_course_slider'>
                        <img src={img} />
                        <h3>Scratch Game Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                  


                </Slider>

            </div>
        </>
    )
}

export default PerfectCourseSlider
