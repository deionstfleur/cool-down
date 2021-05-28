import React from 'react';
import { Container, Row, Col, Figure, Jumbotron } from 'react-bootstrap';
import Navbar from '../../src/components/Navbar'
import create from '../images/create.jpg'
import Footer from '../components/InfoSection/Footer'
import Nav from '../components/Navbar/index'



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

                <Col md={{offset: 1}} >
                 <Figure style={{paddingTop: 10}} md>
                    <Figure.Image src={create}  height={50} width={900} />
                </Figure>
                </Col>
              
                <Container>
                    <Col md={{offset: 3}} style={{paddingLeft: 10}}>
                        <h1 style={{padding: 10, textDecoration: 'underline'}}>Passionate About Service</h1>
                    </Col>
                    <Col md={12}>
                    <p style={{fontSize: 25}}>
In the coming days we will be going around Boston to take note of areas where there is a higher density of people who will be in need of these items we listed above.  This will help us properly prepare for each day, and more importantly will help us reach more people that are in need of some assistance.</p>
                  
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