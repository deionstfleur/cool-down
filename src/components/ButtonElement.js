import styled from 'styled-components';
// import {Link} from 'react-scroll';
import { Link as LinkR } from 'react-router-dom'


export const Button = styled(LinkR)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#01bf71' : '#010606')
};
white-space: nowrap;
padding: ${({big}) => (big ? '14px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex: 
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#fff')};
    text-decoration: none;
}

@media and screen (max-width: 600px) {
    display: none;
}

`

export const Button2 = styled(LinkR)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#01bf71' : '#010606')
};
white-space: nowrap;
padding: ${({big}) => (big ? '14px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex: 
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#fff')};
    text-decoration: none;
}

@media and screen (max-width: 600px) {
    display: block;
}

`