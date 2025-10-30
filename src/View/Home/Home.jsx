import React from 'react'
import './Home.css'
import HomeBanner from './HomeBanner/HomeBanner'
import OurClients from './OurClients/OurClients'
import PerfectCourse from './PerfectCourse/PerfectCourse'
import UnlockPotential from './UnlockPotential/UnlockPotential'
import WeCode from './WeCode/WeCode'
import Testimonials from './Testimonials/Testimonials'
import FAQ from './FAQ/FAQ'
import TrustedUser from './TrustedUser/TrustedUser'
import BlogPost from './BlogPost/BlogPost'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <OurClients/>
            <PerfectCourse/>
            <UnlockPotential/>
            <WeCode/>
            <Testimonials/>
            <FAQ/>
            <TrustedUser/>
            <BlogPost/>
        </>
    )
}

export default Home
