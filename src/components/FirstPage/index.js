import React from 'react'
import {
    Jumbotron,
    Button,
    Container
} from 'react-bootstrap'
import { VideoBg } from '../HeroSection/styles'
import Video from '../../videos/video.mp4'


const FirstPage = () => {
    return(
        <Jumbotron style={{height: 800}}>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            <Container md={12}>
                 <h1 style={{fontSize: 50}}> Cooldown Boston</h1>
                    <Button style={{borderRadius: '30px'}}variant="primary">Learn more</Button>
            </Container>
            
            {/* <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p> */}
            <p>
            </p>
    </Jumbotron>
    )

}

export default FirstPage;