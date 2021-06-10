import React from 'react';
import {Jumbotron, Container, Row, Col, Figure} from 'react-bootstrap'
import Navbar from '../../src/components/Navbar'
import Darius from '../images/Darius.jpg'
import Desmond from '../images/Desmond.jpg'
import Kevin from '../images/Kevin.jpg'
import Footer from '../components/InfoSection/Footer'
import Khari from '../images/khari.jpeg'
import Fade from 'react-reveal/Fade';
import Nav from '../components/Navbar/index'
import '../pages/members.css'




const members = () => {
    return(
        <div style={{overflowX: 'hidden'}} >
            <Nav />
            <Jumbotron style={{backgroundColor: '#00262F', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black'}}>Members</h1>
                    </Col>
            </Jumbotron>
      
        <Container>
            <Row >
           
              <Col md={6}>
                <Figure >
                    {/* <Figure.Image src={Darius} height={300} width={200} style={{borderRadius: 20}}  />
                     */}
                     <img src={Darius} style={{borderRadius: 20}} className="animation" />
                    <h4 style={{marginTop: 20, textDecoration: 'underline', marginRight: 85, textAlign: 'center'}}> Darius Anderson</h4>
                    <div className="box">
                    <p style={{position: 'relative', margin: 5, textAlign: 'center'}}>Founder</p>
                    </div>
                    <h2 style={{fontSize: 20, fontWeight: 20, marginRight: 60, fontWeight: 'normal'}}>Darius Anderson: Founder of CoolDown Boston, a Boston native and has been involved in many non for profit organizations for close to a decade. All of these different influences have aided in his path to philanthropy and giving back to his community. Darius started CoolDown Boston in 2018 because he saw a real issue in his community that he wanted to solve.</h2>
                </Figure>
              
              </Col>

          
            <Col md={6}>
                <Figure>
                    {/* <Figure.Image src={Desmond} height={300} width={200} style={{borderRadius: 20}} /> */}
                    <img src={Desmond} style={{height: 400, width: 400, borderRadius: 20}}  />
                    <h4 style={{marginTop: 20, textDecoration: 'underline', marginRight: 85, textAlign: 'center'}}> Desmond Sullivan</h4>
                    <div className="box">
                    <p style={{position: 'relative', margin: 5, textAlign: 'center'}}>Volunteer Director</p>
                    </div>
                    <h2 style={{fontSize: 20, fontWeight: 20, marginRight: 60, fontWeight: 'normal'}}>In charge of volunteers and distribution teams for the give out days for CoolDown Boston.</h2>
                </Figure>
            
            </Col>
             
            </Row>

            <Row >
              <Col md={6}>
                <Figure >
                    {/* <Figure.Image src={Darius} height={300} width={200} style={{borderRadius: 20}}  /> */}
                    <img src={Kevin} style={{height: 400, width: 400, borderRadius: 20}} />
                    <h4 style={{marginTop: 20, textDecoration: 'underline', marginRight: 15, textAlign: 'center'}}> Kevin Jubani</h4>
                    <div className="box">
                    <p style={{position: 'relative', margin: 5, textAlign: 'center'}}>Financial Director</p>
                    </div>
                    <h2 style={{fontSize: 20, fontWeight: 20, marginRight: 60, fontWeight: 'normal'}}>In charge of finances for the company.</h2>
                </Figure>
              
              </Col>
          
              <Col md={6}>
                    <Figure>
                        {/* <Figure.Image src={Kevin} height={100} width={300} style={{borderRadius: 20}} /> */}
                        <img src={Khari} style={{height: 400, width: 400, borderRadius: 20}} alt="khari" />
                        <h4 style={{marginTop: 20, textDecoration: 'underline', marginRight: 85, textAlign: 'center'}}> Khari Brydie-Lovelock</h4>
                        <div className="box">
                        <p style={{position: 'relative', margin: 5, textAlign: 'center'}}> Media Director</p>
                        </div>
                        <h2 style={{fontSize: 20, fontWeight: 20, marginRight: 60, fontWeight: 'normal'}}> In charge of media for CoolDown Boston; newspapers, social media, pictures and videos. </h2>
                    </Figure>           
             </Col>            
        </Row>
        </Container>
            
            <Footer />
        </div>
    )

}

export default members;