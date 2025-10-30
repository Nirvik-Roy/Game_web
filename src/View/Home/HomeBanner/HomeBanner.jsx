import React from 'react'
import bannerImg from '../../../assets/Group 3699.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HomeBanner.css'
import group from '../../../assets/klipartz.com (26) 2.png'
const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className='home_banner'>
                <div className='container home_banner_content_Wrapper'>
                    <div className='home_banner_left'>
                        <h1>Learn to Code Roblox & Scratch Games</h1>
                        <p>Master game development with fun, interactive lessons!
                            Create your own Roblox and Scratch games while learning coding
                            fundamentals. Whether you're a beginner or an aspiring game developer,
                            our step-by-step guidance makes coding easy and exciting. Start building
                            today! </p>
                        <div className='home_banner_left_btn_wrapper'>
                            <button className='log_in_btn'>Get Free Trial</button>
                            <button className='check_courses_btn'>Check Courses</button>
                        </div>
                    </div>
                    <div className='home_banner_right'>
                        <Slider {...settings}>
                            {[bannerImg, bannerImg, bannerImg].map((e, i) => (
                                <img key={i} src={e} />
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>

            <div className='container group_img'>
                <img src={group}/>
            </div>
        </>
    )
}

export default HomeBanner
