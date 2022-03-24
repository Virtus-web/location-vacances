import { Component } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import colors from '../utils/styles/colors'
import HeaderLogo from '../assets/HeaderLogo.svg'

const HeaderContainer = styled.header`
    padding: 1em 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 480px){
        padding: 0.5em;
    }
`

const LogoHeader = styled.img`
    height: 50px;
    @media all and (max-width: 480px){
        height: 25px;
    }
`

const NavContainer = styled.nav`
    ${'' /* padding: 10px; */}
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10em;
    @media all and (max-width: 480px){
        font-size: 12px;
        text-transform: uppercase;
        width: 11em;
    }
`

const StyledLink = styled(NavLink)`
    color: ${colors.primary};
`

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Link to="/location-vacances">
                    <LogoHeader src={HeaderLogo} />
                </Link>
                <NavContainer>
                    <StyledLink exact to="/location-vacances">Accueil</StyledLink>
                    <StyledLink to="/about">A propos</StyledLink>
                </NavContainer>
            </HeaderContainer>
        )
    }
}

export default Header

