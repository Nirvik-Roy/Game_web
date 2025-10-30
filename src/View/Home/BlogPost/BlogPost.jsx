import React from 'react'
import './BlogPost.css'
import img from '../../../assets/Image78.png'
import img1 from '../../../assets/image7899.png'
import img2 from '../../../assets/image89.png'
import img3 from '../../../assets/image59.png'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FreeTrail from './FreeTrail'
const BlogPost = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
                responsive: [
            {
                breakpoint: 999, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 799, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
                    {
                breakpoint: 576, // Applies to screen widths up to 1024px
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
            title: 'Roblox'
        },
        {
            img: img1,
            title: 'Roblox'
        },
        {
            img: img2,
            title: 'Scratch'
        },
        {
            img: img3,
            title: 'Minecraft'
        },
        {
            img: img1,
            title: 'Roblox'
        },

    ]
    return (
        <>
            <div className='blog_post_wrapper'>
                <div className='container blog_post_content_wrapper'>
                    <h1 className='heading'>Discover New Blog Posts</h1>
                    <p className='heading_para'>Stay updated with our latest blog content</p>
                    <div className='blog_slider_wrapper'>
                        <Slider {...settings}>
                            {data.map((e, i) => (
                                <div className='blog_slider'>
                                    <img src={e.img} />
                                    <div className='blog_slider_content'>
                                        <div className='slider_date'>
                                            <h3>18</h3>
                                            <h4>Jan</h4>
                                        </div>
                                        <p>{e.title}</p>
                                        <h6>Sed ut perspiciatis unde omnis</h6>
                                        <Link>Learn More</Link>
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
                <FreeTrail/>
            </div>

        </>
    )
}

export default BlogPost
