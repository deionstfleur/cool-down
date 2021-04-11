import React from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import Navbar from '../../src/components/Navbar'
import { FaFacebook, FaInstagram, FaMobileAlt} from 'react-icons/fa'
import Footer from '../components/InfoSection/Footer'
import Nav from '../components/Navbar/index2'



const contact = () => {
    return(
        <div>
            <Nav />
            <Jumbotron style={{backgroundColor: 'lightblue', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black' }}>Contact !</h1>
                    </Col>
            </Jumbotron>

        <Container>
                
                <Col md={{offset: -14}} >
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23587.08236274649!2d-71.07790558777937!3d42.35562738166013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370832503ad5b%3A0x18d02d6e8684bd98!2sDowntown%2C%20Boston%2C%20MA!5e0!3m2!1sen!2sus!4v1617818947619!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </Col>
               <Col md={{offset: 4}}>
                <Row style={{paddingTop: 50}}>
                 <h1>
                        <FaInstagram /> @cooldown
                 </h1>  
                </Row>  

                <Row style={{paddingTop: 10}}>
                 <h1>
                        <FaFacebook /> Cooldown Boston
                 </h1>  
                </Row> 

                <Row style={{paddingTop: 10}}>
                 <h1>
                        <FaMobileAlt /> Cooldown Boston
                 </h1>  
                </Row>
               
               </Col>

        </Container>
        <Footer />
            
        </div>
    )

}

export default contact;