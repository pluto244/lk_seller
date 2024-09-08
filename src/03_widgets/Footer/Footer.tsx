import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #f7f7f5;
    color: black;
    text-align: center;
    padding: 15px 0;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 0.9em;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; 2024 Росошанский Егор</FooterText>
        </FooterContainer>
    );
};

export default Footer;
