import React from 'react'
import { Container, Row, Col, Image, Figure, Button, Card} from 'react-bootstrap';
import events from '../../images/events.jpg'
import freewater from '../../images/freewater.jpeg'
import educate from '../../images/educate.jpg'
import Boston from '../../images/Boston.jpg'
import Desmond from '../../images/Desmond.jpg'
import InfoSection from '../InfoSection';
import { InfoContainer } from '../InfoSection/styles';
import { FooterContainer } from '../Footer/styles';
import context from 'react-bootstrap/esm/AccordionContext';
import { HeroContainer } from '../HeroSection/styles';
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';



const SecondPage = () => {
    return(
        <>
        {/* <Container style={{height: 200 }> */}
                <Container style={{paddingTop: 50}}>
                {/* <Fade left > */}
{/* 
                    <Row md={6}>
                <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>
                    <h1 style={{fontSize: 50, paddingBottom: 20, textDecoration: 'underline'}}>Creating Community!</h1>

                    <Figure style={{paddingTop: 10}}>
                        <Figure.Image style={{boxShadow: '8px 8px lightblue'}} src={freewater} />
                    </Figure>
                </Col>
                <Col md={6}>
                    <p style={{fontSize: 25, paddingTop: 100}}>The mission of Cooldown Boston, a nonprofit charity watchdog and information service, is to maximize the effectiveness of every dollar contributed to charity by providing donors with the information they need to make more informed giving decisions. </p>
                    
                    <Link to="/About">
                        <Button style={{borderRadius: 30}}  >Learn More</Button>
                    </Link>
                
                </Col>

                    </Row> */}
                {/* </Fade> */}
                       
                    



                {/* <Fade right > */}
                    <Row md={6} style={{paddingTop: 10}}>
                        <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>
                            <h1 style={{fontSize: 50, paddingBottom: 20, textDecoration: 'underline'}}>What We Do!</h1>
                            <p style={{fontSize: 25}}> To research and evaluate the efficiency, accountability and governance of nonprofit organizations; to educate the public about the importance of wise giving; to inform the public of wasteful or unethical practices of nonprofits and provide recognition to highly effective and ethical charities</p>
                           
                            <Link to="/Services">
                                 <Button style={{borderRadius: 30}} >Learn More</Button> 
                            </Link>

                        </Col>
                        <Col md={6}>
                            <Figure style={{paddingTop: 10}}>
                                <Figure.Image style={{boxShadow: '8px 8px teal', borderRadius: 100}}  src={Desmond} />
                            </Figure>
                        </Col>

                    </Row>
                    {/* </Fade>          */}
       </Container>
       
            </>
           
       
       )
      
       
}

export default SecondPage;