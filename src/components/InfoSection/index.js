import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap';
import{ Button} from 'react-bootstrap';
import { 
    InfoContainer, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
    InfoRow,
     } from './styles'
    import Boston from '../../images/Boston.jpg'
    import EDUCATE from '../../images/EDUCATE2.jpg'
    import SERVE from '../../images/SERVE.jpg'
    import EXPAND from'../../images/EXPAND.jpg'
    import Pulse from 'react-reveal/Pulse';
    import {Link} from 'react-router-dom'
    import freewater from '../../images/freewater.jpeg'


const InfoSection = ({
 
}) => {
    return (
        <InfoContainer >
            <InfoWrapper>
         
            <Container>

            <Row md={6} style={{marginTop: 50}}>
                <Col md={{span: 5, offset: 1}} style={{paddingTop:  10}}>

                    <Figure style={{paddingTop: 10}}>
                        <Figure.Image style={{boxShadow: '8px 8px lightblue', borderRadius: 100}} src={freewater} />
                    </Figure>
                </Col>
                <Col md={6} style={{}}>
                    <h1 style={{fontSize: 50, paddingBottom: 20, textDecoration: 'underline'}}>Creating Community!</h1>
                    <p style={{fontSize: 25,}}>The mission of Cooldown Boston, a nonprofit charity watchdog and information service, is to maximize the effectiveness of every dollar contributed to charity by providing donors with the information they need to make more informed giving decisions. </p>
                    
                    <Link to="/Contact">
                        <Button style={{borderRadius: 30}} >Learn More</Button>
                    </Link>
                
                </Col>

                    </Row>
            </Container>
                
                    
                    
                    
                    
               
             
          
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;
