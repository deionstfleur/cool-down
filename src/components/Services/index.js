import React from 'react';
// import { Icon1} from '../'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    // ServicesIcon,
    ServicesH2,
    ServicesP
} from './styles'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Promises</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1} /> */}
                    <ServicesH2>Provide for the homeless</ServicesH2>
                    <ServicesP> we help reduce fees</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    {/* <ServicesIcon src={Icon2} /> */}
                    <ServicesH2>Spread Awareness</ServicesH2>
                    <ServicesP> we help reduce fees</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    {/* <ServicesIcon src={Icon3} /> */}
                    <ServicesH2>Educate!</ServicesH2>
                    <ServicesP> we help reduce fees</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
