import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Kevin from '../../images/Kevin.jpg'

const FounderCard = () => {
    return(
            <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
            >

            <FrontSide
            style={{
            backgroundColor: '#41669d',
        
            }}
            >
            Kevin
            <img src={Kevin} height="330" width="350"   />
            </FrontSide>
            <BackSide
            style={{ backgroundColor: 'lightgrey'}}>
            ROCKS
            </BackSide>
            </Flippy>

    )

}

export default FounderCard;