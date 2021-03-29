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
    VideoBg
 } from './styles'
 import {Button} from '../ButtonElement' 
 import Video from '../../videos/video.mp4'
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
                <HeroH1> Cooldown Boston</HeroH1>
                <HeroP>
                    Explore our services and see how you can help!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Explore {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
