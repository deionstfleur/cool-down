import React from 'react';
import { FiMail } from "react-icons/fi";
import {FiInstagram} from "react-icons/fi"
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
    InfoRow} from './styles2'

const ContactPage = () => {
    return(
        <InfoContainer >
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>Hello</TopLine>
                        <Heading style={{backgroundColor: '#fff'}}>Contact Us</Heading>
                        <Subtitle > <FiMail /> cooldownboston@gmail.com </Subtitle>
                        <BtnWrap>
                            {/* <Button to='home'>{buttonLabel}</Button> */}
                        </BtnWrap>
                    </TextWrapper>
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

export default ContactPage;