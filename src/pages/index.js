import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne,homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ContactPage from '../../src/components/InfoSection/Contact'
const Home = () => {

    // const [isOpen, setIsOpen] = useStae(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

    return (
        <div>  
            <Navbar />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services {...homeObjThree} />
            {/* <InfoSection {...homeObjFour} /> */}
            <ContactPage />
            <Footer />
        </div>
    )
}

export default Home
