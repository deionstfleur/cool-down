import React from 'react';
import { InfoContainer, 
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
    InfoRow} from './styles3'
    import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Desmond from '../../images/Desmond.jpg'
import FounderCard from './FounderCard'
import FounderCard2 from './FounderCard2'
import FounderCard3 from './FounderCard3'
import '../Services/styles'
import {ServicesWrapper} from '../Services/styles'
import { Container, Col, Row } from 'react-bootstrap';

    const  FounderPage = () => {
        return(
            <InfoContainer style={{backgroundColor: 'white'}}>
          

                    <Column1>
                       
                            <Container style={{padding: 20}}>
                                    <TopLine style={{fontSize: 35, color: 'black', alignItems: 'center'}}>Meet the Founders</TopLine>
                                <Row  md={6} >
                                    <Col md={4}>
                                    <FounderCard />

                                    </Col>
                                    <Col md={4}>
                                     <FounderCard2 />
                                    </Col>

                                    <Col md={4}>
                                     <FounderCard3 />
                                    </Col>
                                </Row>
                            </Container>
                            
                     
                          

                            {/* <Heading style={{backgroundColor: '#fff'}}>Contact Us</Heading> */}
                            {/* <Subtitle > <FiMail /> cooldownboston@gmail.com </Subtitle> */}
                            <BtnWrap>
                                {/* <Button to='home'>{buttonLabel}</Button> */}
                            </BtnWrap>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                     <Img  />
                    </ImgWrap>
                    </Column2>
            
           
        </InfoContainer>

        )

    }

    export default FounderPage;