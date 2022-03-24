import { Component } from 'react'
import styled from 'styled-components'
import FooterLogo from '../assets/FooterLogo.svg'

const FooterContainer = styled.header`
    padding-top: 3em;
    margin-top: 1em;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 480px){
        margin-top: 3em;
    }
`

const LogoFooter = styled.img`
    height: 50px;
    @media all and (max-width: 480px){
        height: 25px;
    }
`

const FooterText = styled.p`
    color: white;
    padding-top: 1em;
    @media all and (max-width: 480px){
        font-size: 12px;
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <LogoFooter src={FooterLogo} />
                <FooterText>© 2020 Kasa. All rights reserved</FooterText>
            </FooterContainer>
        )
    }
}

export default Footer

