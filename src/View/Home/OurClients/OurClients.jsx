import React from 'react'
import './OurClients.css'
import logo from '../../../assets/Logo box.png'
import logo1 from '../../../assets/Logo box (1).png'
import logo2 from '../../../assets/Logo box (2).png'
import logo3 from '../../../assets/Logo box (3).png'
import logo4 from '../../../assets/Logo box (4).png'
const OurClients = () => {
  return (
    <>
      <div className='our_cilents_wrapper'>
        <div className='container clients_content_wrapper'>
            <h1 className='heading'>Our Clients</h1>
            <div className='clients_logos_wrapper'>
                {[logo,logo1,logo2,logo3,logo4].map((e,i)=>(
                    <img src={e}/>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default OurClients
