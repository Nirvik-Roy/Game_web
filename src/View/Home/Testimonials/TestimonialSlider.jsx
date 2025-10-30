import React from 'react'
import './Testimonials.css'
import star from '../../../assets/Star 1.png'
import star2 from '../../../assets/Star 1 (1).png'
import img from '../../../assets/image (3).png'
import img2 from '../../../assets/image (4).png'
import img3 from '../../../assets/image (5).png'
import border from '../../../assets/Union.png'
import border2 from '../../../assets/Union (1).png'
import border3 from '../../../assets/Union (2).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TestimonialSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1299, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 899, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    const data = [
        {
            img: img,
            border: border,
            role: 'Game Developer'
        },
        {
            img: img2,
            border: border2,
            role: 'Java Developer'
        },
        {
            img: img3,
            border: border3,
            role: 'Student'
        },
        {
            img: img,
            border: border,
            role: 'Game Developer'
        },

    ]
    return (
        <>
            <div className='testimonial_slider_wrapper'>
                <Slider {...settings}>
                    {data.map((e, i) => (

                        <div className='testimonial_slider_card'>
                            <img src={e.border} className='border_img' />
                            <div className='rating_and_img_wrapper'>
                                <div className='rating_wrapper'>
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star} />
                                    <img src={star2} />
                                </div>

                                <img className='avatar_img' src={e.img} />
                            </div>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</p>

                            <h6>Ammy Furrugia <span>{e.role}</span></h6>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default TestimonialSlider
