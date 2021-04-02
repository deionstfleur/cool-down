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
            <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine style={{fontSize: 35, color: 'white'}}>Meet the Founders</TopLine>
                            <Container>
                                <Row  md={12}>
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
                            
                     
                            </TextWrapper>

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
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>

        )

    }

    export default FounderPage;