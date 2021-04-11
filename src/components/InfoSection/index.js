import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap';
import{ Button} from '../ButtonElement';
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
    InfoRow } from './styles'
    import Boston from '../../images/Boston.jpg'
    import EDUCATE from '../../images/EDUCATE2.jpg'
    import SERVE from '../../images/SERVE.jpg'
    import EXPAND from'../../images/EXPAND.jpg'
    import Pulse from 'react-reveal/Pulse';


const InfoSection = ({
 
}) => {
    return (
        <InfoContainer >
            <InfoWrapper>
             <Pulse>

                  <Row>
                    <Col md={{offset: 4}}>
                        <h1 style={{paddingTop: 30, fontSize: 50, textDecoration: 'underline'}}>Our Promises</h1>
                    </Col>
                </Row>
             
                <Container style={{paddingTop: 10}}>
               <Row>
                   <Col md={4}>
                        <Figure>
                            <Figure.Image  style={{cursor: 'pointer'}} src={EDUCATE} width={400} height={400} />
                        </Figure> 
                   
                   </Col>

                   <Col md={4}>

                        <Figure>
                            <Figure.Image src={SERVE} width={400} height={200} />
                        </Figure> 
                   </Col>
               <Col md={4}>
                        <Figure>
                            <Figure.Image src={EXPAND} width={400} height={200} />
                        </Figure> 
               
               </Col>
               </Row>
                   
                    
                    
                    
                    
                </Container>
             </Pulse>
          
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;
