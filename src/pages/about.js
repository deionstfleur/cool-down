import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import Navbar from '../../src/components/Navbar'
import create from '../images/create.jpg'
import Footer from '../components/InfoSection/Footer'
import Nav from '../components/Navbar/index2'



const about = () => {
    return(
        <div>
            <Nav />
            <Container>
                <Col md={{span: 5, offset: 4}} style={{paddingTop: 80}}>
                 <h1> Creating Community</h1>
                </Col>

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
                    <p style={{fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet risus. Sed interdum, ante nec mattis ultricies, nisl ante consectetur lacus, vel posuere libero quam ac mauris. Ut cursus eleifend pulvinar. Aenean facilisis velit sit amet nisl posuere volutpat. Fusce rutrum purus est, ut tempus nisi condimentum in.</p>
                  
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