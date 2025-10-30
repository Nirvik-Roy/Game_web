import React from 'react'
import logo from '../../../assets/Group.png'
import logo2 from '../../../assets/Frame.png'
import logo3 from '../../../assets/Layer_1.png'
import logo4 from '../../../assets/Capa_1.png'
const Event = () => {
    const EventData = [
        {
            img: logo,
            title: 'Gaming Event',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },
        {
            img: logo2,
            title: 'Sponsored Courses',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },
        {
            img: logo3,
            title: 'Partnered Courses',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },
        {
            img: logo4,
            title: 'International Online Safety',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.'
        },

    ]
    return (
        <>
            <div className='event_wrapper'>
                <div className='container event_content_wrapper'>
                    {EventData.map((e, i) => (
                        <div className='event_card'>
                            <div className='event_content'>
                                <img src={e.img} />
                                <h5>{e.title}</h5>
                                <p>{e.details}</p>
                            </div>
                        </div>
                    ))}





                </div>
            </div>
        </>
    )
}

export default Event
