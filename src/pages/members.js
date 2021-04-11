import React from 'react';
import {Jumbotron, Container, Row, Col, Figure} from 'react-bootstrap'
import Navbar from '../../src/components/Navbar'
import Darius from '../images/Darius.jpg'
import Desmond from '../images/Desmond.jpg'
import Kevin from '../images/Kevin.jpg'
import Footer from '../components/InfoSection/Footer'
import Fade from 'react-reveal/Fade';
import Nav from '../components/Navbar/index2'




const members = () => {
    return(
        <div>
            <Nav />
            <Jumbotron style={{backgroundColor: 'lightblue', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black' }}>Members</h1>
                    </Col>
            </Jumbotron>
            <Container>
                <Row>
                    <Col style={{paddingTop: 15}} md={{offset: 5}}>
                    </Col>
                </Row>
                <Row> 
               <Col md={6}>
                <Fade left >

                    <Figure>
                        <Figure.Image src={Darius} />
                    </Figure>
                </Fade>
               </Col>
               <Col md={6}>
                        <h1 style={{fontSize: 25, paddingTop: 20, textDecoration: 'underline'}}>Darius Anderson (Founder)</h1>
                        <p style={{fontSize: 22}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
               </Col>
               

               <Col md={6}>
                   <h1 style={{fontSize: 25, paddingTop: 20, textDecoration: 'underline'}}> Desmond Sullivan (Founder)</h1>
                   <p style={{fontSize: 22}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>    
             </Col>
          <Col md={6}>
                   <Fade right >
                        <Figure>
                            <Figure.Image src={Desmond} />
                        </Figure>
                   </Fade>
          </Col>

          <Col md={6}>
               
              <Fade left >
               <Figure>
                   {/* <Figure.Image src={Kevin} /> */}
                   Kevin
               </Figure>
              </Fade>
          </Col>
          <Col md={6}>
                   <h1 style={{fontSize: 25, paddingTop: 20, textDecoration: 'underline'}}> Kevin Jubani (Founder)</h1>
                   <p style={{fontSize: 22}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
          </Col>

               {/* <Col md={4}>
               
               <Figure>
                   <Figure.Image src={Desmond} />
                   <h1 style={{fontSize: 25}}>Desmond Sullivan (Founder)</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
               </Figure>
          </Col>
          <Col md={4} >
               
               <Figure> */}
                   {/* <Figure.Image src={Kevin} /> */}
                   {/* Kevin
                   <h1 style={{fontSize: 25}}>Kevin Jubani (Founder)</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu luctus enim. Vestibulum tincidunt nulla sapien, at eleifend urna commodo ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue porta ante sed pulvinar. Cras ultricies gravida mauris a vulputate.</p>
               </Figure>
          </Col> */}


                    {/* <Figure>
                        <Figure.Image src={Darius} />
                    </Figure>
                    <Figure>
                        <Figure.Image src={Darius} />
                    </Figure> */}
                </Row>

            </Container>
            <Footer />
        </div>
    )

}

export default members;