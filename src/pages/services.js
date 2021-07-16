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
import './services.css'
import VideoPlayer from 'react-video-js-player'
import vid from '../videos/Darius-blue.mov'
import ReactPlayer from 'react-player';

const Video = () => {
const Darius = vid;
const post = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fshop.wilson.com%2Fen-gb%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F146%2Fimage%2F1800x%2F040ec09b1e35df139433887a97daa66f%2F7%2F6%2F76674d62400bcdd22cdada2e76b9b8fce8145ff8_WTB0900XBBCL_7_FIBA_EVO_NXT_Basketball_Champions_League_Official_BU_Teal_SI.jpg&imgrefurl=https%3A%2F%2Fwww.wilson.com%2Fen-gb%2Fbasketball%2Fbasketballs%2Fgame%2Fevo-nxt-champions-league-basketball-153115&tbnid=Gb8IRN44dte4FM&vet=12ahUKEwjio6rgrebxAhXvV98KHYQOC34QMygBegUIARDOAQ..i&docid=TsKpwrJLQ50X1M&w=1200&h=1200&q=basketball&ved=2ahUKEwjio6rgrebxAhXvV98KHYQOC34QMygBegUIARDOAQ"

}

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

                    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Our Recent Engagements</h1>
                <p style={{fontSize: 20, lineHeight: "3vw", marginTop: 30}}>      CoolDown Boston was founded with the mission of helping out the less fortunate of the Greater Boston Area.  We look to provide everyday basic essentials including, water, hygienic supplies, snacks, and during the winter; gloves, hats, blankets, and hopefully depending on our donations this summer we would like to provide sweatshirts and sweatpants as well.</p>
                  </Col>
                <div>
        <div style={{alignItems: 'center'}}>
              <Row>
                  <Col md={3} style={{margin: 35}}>
                    <Figure>
                        <div>

                        <img className="picture" src={trunk} style={{height: 350, width: 350, borderRadius: '20px'}} />
                        </div>
                    </Figure>
                  </Col>

                  <Col md={3}  style={{margin: 35}}>
                    <Figure>
                        <img src={freewater} style={{height: 350, width: 350,borderRadius: '20px'}} />
                    </Figure>
                  </Col>

                  <Col md={3}  style={{margin: 35}}>
                    <Figure>
                        
                        <img src={events} style={{height: 350, width: 350, borderRadius: '20px'}} />
                    </Figure>
                  </Col>

              </Row>
                  <ReactPlayer url="https://youtu.be/QR1EvaTJPHk" height={200} width="700" />
            <br/>
            <br/>
            <br/>
              <Row>
                <Col med={6}>
                  <ReactPlayer url="https://youtu.be/pxFx4FuNGhQ" height={400} width="650" />
                </Col>

                <Col med={6}>
                  <ReactPlayer url="https://youtu.be/PbpRSfAMlnQ" height={400} width="350" />
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