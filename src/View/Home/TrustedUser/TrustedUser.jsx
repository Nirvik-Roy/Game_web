import React from 'react'
import './TrustedUser.css'
import img from '../../../assets/image (6).png'
import img1 from '../../../assets/image (7).png'
import img2 from '../../../assets/image (8).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TrustedUser = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:'0px',
        responsive: [
            {
                breakpoint: 960, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 579, // Applies to screen widths up to 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return (
        <>
            <div className='trusted_user_Wrapper'>
                <div className='container trusted_user_content_wrapper'>
                    <h1 className='heading' style={
                        {
                            color: "#fff"
                        }
                    }>Trusted By Users</h1>
                    <p className='heading_para' >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam</p>
                    <div className='trusted_slider_Wrapper'>
                        <Slider {...settings}>
                            {[img, img1, img2,img].map((e, i) => (

                                <div key={i} className='trusted_slide'>
                                    <img src={e} />
                                    <div className='play_icon' style={{
                                        width:'80px',
                                        height:'80px',
                                        border:'5px solid #fff',
                                        position:'absolute',
                                        top:'50%',
                                        left:'50%',
                                        transform:'translate(-50%,-50%)',
                                        zIndex:'999',
                                        color:'#fff',
                                        fontSize:'30px',
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        borderRadius:'50%'
                                    }}>
                                        <i class="fa-solid fa-play"></i>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedUser
