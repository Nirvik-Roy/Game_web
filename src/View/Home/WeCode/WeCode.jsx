import React from 'react'
import './WeCode.css'
import img from '../../../assets/image.png'
import img2 from '../../../assets/image (1).png'
import img3 from '../../../assets/image (2).png'
const WeCode = () => {

    return (
        <>
            <div className='we_code_wrapper'>
                <div className=' we_code_content'>
                    <div className='we_code_left'>
                        <h1>We code and bring dreams to life</h1>
                        <p>Turn your imagination into reality through coding! Whether it’s building immersive Roblox worlds or designing fun Scratch games, we help you transform ideas into interactive experiences. Start your coding journey today and create the games of your dreams! </p>
                    </div>
                    <div className='we_code_right'>
                        <div className='active_img'>
                            <img src={img} />
                        </div>
                        <div className='not_activeImg'>
                            <img src={img2} />
                        </div>
                        <div className='not_activeImg'>
                            <img src={img3} />
                        </div>
                        <div className='not_activeImg'>
                            <img src={img} />
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeCode
