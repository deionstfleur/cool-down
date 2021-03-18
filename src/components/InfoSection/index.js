import React from 'react'
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

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lighText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lighText}>{headline}</Heading>
                            <Subtitle darkText={darkText}> {description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                     <Img src={img} alt={alt}  />
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;
