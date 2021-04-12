import React from 'react'
import { Container, Row, Col, Image, Figure, Button, Card} from 'react-bootstrap';
import events from '../../images/events.jpg'
import homeless from '../../images/homeless.jpg'
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
                <Fade left >

                    <Row md={6}>
                <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>
                    <h1 style={{fontSize: 50, paddingBottom: 20, textDecoration: 'underline'}}>Creating Community!</h1>

                    <Figure style={{paddingTop: 10}}>
                        <Figure.Image style={{boxShadow: '8px 8px lightblue'}} src={events} />
                    </Figure>
                </Col>
                <Col md={6}>
                    <p style={{fontSize: 25, paddingTop: 20}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
                    
                    <Link to="/About">
                        <Button style={{borderRadius: 30}}  >Learn More</Button>
                    </Link>
                
                </Col>

                    </Row>
                </Fade>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                <Fade right >
                    <Row md={6} style={{paddingTop: 20}}>
                        <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>
                            <h1 style={{fontSize: 50, paddingBottom: 20, textDecoration: 'underline'}}>What We Do!</h1>
                            <p style={{fontSize: 25, paddingTop: 20}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
                           
                            <Link to="/Services">
                                 <Button style={{borderRadius: 30}} >Learn More</Button> 
                            </Link>

                        </Col>
                        <Col md={6}>
                            <Figure style={{paddingTop: 10}}>
                                <Figure.Image style={{boxShadow: '8px 8px teal'}}  src={Desmond} />
                            </Figure>
                        </Col>

                    </Row>
                    </Fade>         
       </Container>
       
            </>
           
       
       )
      
       
}

export default SecondPage;