import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center; 
align-items: center;
padding: 0 30px;
height: 880px;
position: relative;
z-index: 1;
width: 100%;
margin-top: -59px;

@media screen and (max-width: 400px) {
    background: #000;
}


`

export const Background = styled.div`


`

export const HeroBg = styled.div`
position: absolute: 
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden
`
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;


@media screen and (min-width: 400px) {
    display: block;
}

`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 68px;
text-align: center;
font-family: 'Dela Gothic One', cursive;
text-shadow: 2px 2px #000;



@media screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 10px;
  
    
}
`

export const  HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
text-shadow: 2px 2px #000;


@media screen and (max-width: 768px) {
    font-size:  24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
