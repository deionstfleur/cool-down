import styled from 'styled-components';

export const ServicesContainer = styled.div`
height: 680px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media screen and (max-width: 768px) {
    height: 645px;
    justify-content: center;
    align-items: center;
}
`

export const ServicesWrapper = styled.div`
margin: 0;
display: flex;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 46px;


@media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    width: 100%;
}
`

export const ServicesCard = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 2px 5px 5px rgba(137, 196, 244, 1);
transition: all 0.2s ease-in-out;

&:hover {
    tranform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px
`
export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-bottom: 64px;
text-align: center

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`