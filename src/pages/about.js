import React from 'react';
import { Container, Row, Col, Figure, Jumbotron } from 'react-bootstrap';
import Navbar from '../../src/components/Navbar'
import create from '../images/create.jpg'
import Footer from '../components/InfoSection/Footer'
import Nav from '../components/Navbar/index'
import '../pages/about.css'


const about = () => {
    return(
        <div style={{overflowX: 'hidden'}}>
            <Nav />
            <Jumbotron style={{backgroundColor: '#00262F', height: 260}}>
                    <Col md={{offset: 1}}>
                    <h1 style={{color: 'white', fontFamily: 'Flame, "Cooper Black", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 80, paddingTop: 85, textShadow:'1px 1px black'}}>About us</h1>
                    </Col>
            </Jumbotron>
      
            <Container>
                {/* <Col md={{span: 5, offset: 4}} style={{paddingTop: 80}}>
                 <h1> Creating Community</h1>
                </Col> */}

                {/* <Col md={{offset: 1}} >
                 <Figure style={{paddingTop: 10}} md>
                    <Figure.Image src={create}  height={50} width={900} />
                </Figure>
                </Col> */}
              
                <Container>

                    <Row >
                 <Col >
                 
                </Col>
                    </Row>
                    <Row >
                        <div className="col-xs-12 col-lg-6" >
                            <img src={create} style={{height: 500, width: 500, borderRadius: 20}}  />

                            <div className="button" style={{backgroundColor: '#00262F', width: '50%', margin: 'auto', marginTop: 20, borderRadius: 10, height: 80, cursor: 'pointer'}} >
                                <h2 style={{color: '#fff', textAlign: 'center', lineHeight: 1, padding: 5}}><a style={{color: 'white', textDecoration: 'none'}} href="http://www.cooldownboston.com/Members">Check out <br /> our Team !  </a></h2>
                            </div>
                        </div>

                        <div className="col-xs-12 col-lg-6">
                    <h1 style={{padding: 10, textDecoration: 'underline'}}>Passionate About Service</h1>
                        <p style={{fontSize: 20}}>
                    CoolDown Boston was founded with the mission of helping out the less fortunate of the Greater Boston Area.  We look to provide everyday basic essentials including, water, hygienic supplies, snacks, and during the winter; gloves, hats, blankets, and hopefully depending on our donations this summer we would like to provide sweatshirts and sweatpants as well.  The Financial report was based upon our donations from last summer and how many supplies we went through each day/week.  We also did research on each item we would like to give out and find where we can get the best deals.  One of the bigger investments we will be looking to make in the near future is storage space.  Having a location where we can keep all our supplies will be a massive help, where we can stock up on items, rather than having to buy them everyday because we don’t have anywhere to keep them. </p>

                    <p style={{fontSize: 20}}>
                        In the coming days we will be going around Boston to take note of areas where there is a higher density of people who will be in need of these items we listed above.  This will help us properly prepare for each day, and more importantly will help us reach more people that are in need of some assistance.
                        </p>

                        </div>
                    <Figure style={{paddingTop: 10}} md>
                   </Figure>
                    <Col style={{paddingLeft: 10}}>
                
                    </Col>
                    </Row>

                    <Col>
                 

                        <p></p>

          
                  
                    </Col>
                </Container>
              
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <Footer />


            

        </div>
    )

}

export default about;