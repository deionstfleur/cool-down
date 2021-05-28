import React from 'react';
import { Container, Row, Col, Figure, Jumbotron, Button } from 'react-bootstrap';
import Navbar from '../../src/components/Navbar'
import events from '../images/events.jpg'
import Footer from '../components/InfoSection/Footer'
import Fade from 'react-reveal/Fade'
import Nav from '../components/Navbar/index'
import freewater from '../images/freewater.jpeg'
import vid1 from '../videos/IMG_1219.mov'
import Darius from '../videos/IMG_1219.mov'
import trunk from '../images/trunk.jpeg'




const services = () => {
    return(
        <div style={{overflowX: 'hidden'}}>
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
            <Jumbotron style={{backgroundColor: '#00262F', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black' }}>Services</h1>
                    </Col>
            </Jumbotron>
            <Container>
             
          <Container>
              <Row>
                  <Col md={12} xs={12}> 

                <p style={{fontSize: 20}}>      CoolDown Boston was founded with the mission of helping out the less fortunate of the Greater Boston Area.  We look to provide everyday basic essentials including, water, hygienic supplies, snacks, and during the winter; gloves, hats, blankets, and hopefully depending on our donations this summer we would like to provide sweatshirts and sweatpants as well.</p>
                  </Col>
                <div>
                    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Our Recent Engagements</h1>
        <div style={{alignItems: 'center'}}>
              <Row>
                  <Col md={3} style={{margin: 35}}>
                    <Figure>
                        <div style={{border: '1px solid black'}}>

                        <img src={trunk} style={{height: 350, width: 350,border: '1px solid black'}} />
                        </div>
                    </Figure>
                  </Col>

                  <Col md={3}  style={{margin: 35}}>
                    <Figure>
                        <img src={freewater} style={{height: 350, width: 350}} />
                    </Figure>
                  </Col>

                  <Col md={3}  style={{margin: 35}}>
                    <Figure>
                        
                        <img src={events} style={{height: 350, width: 350}} />
                    </Figure>
                  </Col>
              </Row>

        </div>

                
                 </div>
              </Row>
          </Container>

      
       
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