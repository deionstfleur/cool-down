import React, {useState} from 'react'
import { 
    HeroContainer, 
    HeroBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    HeroP,
    ArrowForward,
    ArrowRight,
    ArrowDown,
    VideoBg
 } from './styles'
 import {Button} from '../ButtonElement' 
 import Video from '../../videos/video2.mp4'
 import {Link} from 'react-dom'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import {Row} from 'react-bootstrap'
const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Row>
                 <FaArrowUp size={42} color="white" style={{zIndex: 100}} />
                </Row>
                <HeroH1> Cooldown Boston</HeroH1>
                <HeroP>
                    Explore our services and see how you can help!
                </HeroP>
                <HeroBtnWrapper>
                 
                    <Button to="/About" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Explore {hover ? <FaArrowDown /> : <FaArrowDown />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
