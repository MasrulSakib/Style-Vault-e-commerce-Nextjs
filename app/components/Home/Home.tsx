import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Features from './Features/Features'
import Services from './Services/Services'
import ClientsReview from './ClientsReview/ClientsReview'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Features />
            <Services />
            <ClientsReview />
        </div>
    )
}

export default Home