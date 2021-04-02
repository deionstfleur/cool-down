import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Darius from '../../images/Darius.jpg'


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
            Darius
            <img src={Darius} height="330" width="350" />
            </FrontSide>
            <BackSide
            style={{ backgroundColor: '#175852'}}>
            Co-Founder
            <hr/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum et mauris non sagittis. Mauris eget ante dui. Nunc quis urna at nibh mollis iaculis a in nunc. Sed pulvinar interdum lectus, ut maximus libero ultricies sed. Nullam scelerisque justo in magna tristique, in elementum ipsum consectetur.
            </BackSide>
            </Flippy>

    )

}

export default FounderCard;