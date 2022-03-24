import { Component } from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
`

const LogoBG = styled.div`
    border-radius: 25px;
    width: 100%;
    height: 100%;
    background: black;
    mix-blend-mode: darken;
    opacity: 0.3;
    position: absolute;
    z-index: 2;
`

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    position: absolute;
    z-index: 1;
`

const LogoText = styled.p`
    padding: 0.5em;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 48px;
    color: white;
    position: absolute;
    z-index: 3;
    top: 30%;
    @media all and (max-width: 480px){
        font-size: 24px;
    }
`

class HeaderLogo extends Component {

    render() {

        const textLogo = this.props.text ? <LogoText>Chez vous, partout et ailleurs</LogoText> : null
        
        return (
            <LogoContainer>
                <LogoBG />
                <LogoImg src={this.props.logo} alt="#" />
                {textLogo}
            </LogoContainer>
        )
    }
}

export default HeaderLogo


