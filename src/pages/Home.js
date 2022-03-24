import { Component } from 'react'
import styled from 'styled-components'
import HomeLogo from '../assets/HomeLogo.png'
import HeaderLogo from '../components/HeaderLogo'
import Card from '../components/Card'

const HomeContainer = styled.div`
    padding: 1em 3em;
    @media all and (max-width: 480px){
        padding: 0.5em;
    }
`

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <HeaderLogo logo={HomeLogo} text="true" />
                <Card />
            </HomeContainer>
        )
    }
}

export default Home


