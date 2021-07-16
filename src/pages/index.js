import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne,homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/InfoSection/Footer'
import ContactPage from '../../src/components/InfoSection/Contact'
import FounderPage from '../../src/components/InfoSection/FounderPage';
import Mission from '../components/InfoSection/Mission'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import SideBar from '../components/SideBar'
import Nav from '../components/Navbar/index'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>  
            {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
            {/* <Navbar /> */}
            <Nav  />
            <HeroSection />
            {/* <InfoSection /> */}
            <SecondPage />
            <ThirdPage />
            <Footer />
            {/* <FirstPage /> */}
            {/* <InfoSection /> */}
            {/* <Mission /> */}
            {/* <FounderPage /> */}
            {/* <Services {...homeObjThree} /> */}
            {/* <InfoSection {...homeObjFour} /> */}
            {/* <ContactPage /> */}

        </div>
    )
}

export default Home
