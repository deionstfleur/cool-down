import React from 'react';
import { Container, Row, Col, Figure, Jumbotron, Button } from 'react-bootstrap';
import Navbar from '../../src/components/Navbar'
import events from '../images/events.jpg'
import Footer from '../components/InfoSection/Footer'
import Fade from 'react-reveal/Fade'
import Nav from '../components/Navbar/index2'




const services = () => {
    return(
        <div>
            {/* <Navbar />
            <Jumbotron style={{height: 320, backgroundColor: 'lightblue'}} >
                <Col md={{offset: 1}}>
                <h1 style={{fontSize: 85, color: 'white'}}> What we do!</h1>
                </Col>
            </Jumbotron>
            <Container>
            <h1> Mission Statement</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet risus. Sed interdum, ante nec mattis ultricies, nisl ante consectetur lacus, vel posuere libero quam ac mauris. Ut cursus eleifend pulvinar. Aenean facilisis velit sit amet nisl posuere volutpat. Fusce rutrum purus est, ut tempus nisi condimentum in.</p>
            </Container>
            <Footer /> */}
            <Nav />
            <Jumbotron style={{backgroundColor: 'lightblue', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black' }}>Services</h1>
                    </Col>
            </Jumbotron>
            <Container>
             
            <Row md={6}>
                <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>
                    <h1 style={{fontSize: 50, paddingBottom: 20}}>Creating Community!</h1>

                </Col>
                <Col md={6}>
                    <p style={{fontSize: 25, paddingTop: 20}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
                        {/* <Button style={{borderRadius: 30}}  >Learn More</Button> */}
                </Col>

            </Row>  
            <br></br>
            <br></br>
            <br></br>
          </Container>
          <Footer />

                
            

               
            {/* <Footer />  */}
        </div>
    )

}

export default services;