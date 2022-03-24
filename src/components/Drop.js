import { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/styles/colors'
import arrow from '../assets/Vector.svg'

const DropContainer = styled.div`
    width: 80%;
    border-radius: 5px;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media all and (max-width: 480px){
        width: 100%;
    }
`

const DropBoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    ${'' /* Ici il faut mettre width: auto pour gérer le problème du padding qui déborde à droite (avec celui du conteneur parent, souvent leBody) */}
    padding: 1em;
    background-color: ${colors.primary};
    border-radius: 5px;
    position: relative;
    z-index: 21;
    cursor: pointer;
`

const DropTitle = styled.h2`
    color: white;
    font-size: 24px;
    margin: unset;
    @media all and (max-width: 480px){
        font-size: 13px;
    }
`

const DropBoxText = styled.div`
    display: flex;
    width: auto;
    ${'' /* Ici il faut mettre width: auto pour gérer le problème du padding qui déborde à droite (avec celui du conteneur parent, souvent leBody) */}
    height: auto;
    padding: 1em;
    background-color: ${colors.secondary};
    border-radius: 5px;
    position: relative;
    top: -0.5rem;
    z-index: 20;
`

const DropText = styled.p`
    font-size: 24px;
    color: black;
    margin: unset;
    line-height: 142.6%;
    @media all and (max-width: 480px){
        font-size: 13px;
        color: ${colors.primary};
    }
`

export class Drop extends Component {

    state = {
        dropped: false,
    }
    
    handleDrop = (e) => {
        if (this.state.dropped) {
            this.setState({
                dropped: false
            })
        } else {
            this.setState({
                dropped: true
            })
        }
    }
    
    render() {

        // const dropColor = this.props.type === 'location' ? {color: colors.primary} : {color: 'black'}
            
        return (
            <DropContainer>
                <DropBoxTitle onClick={this.handleDrop}>
                    <DropTitle>{this.props.title}</DropTitle>
                    {   this.state.dropped ? (
                            <img src={arrow} alt="drop-arrow" className="dropDownArrow" />
                        ) : ( 
                            <img src={arrow} alt="drop-arrow" />
                        )
                    }
                </DropBoxTitle>
                {   this.state.dropped ? (
                        <DropBoxText>
                            <DropText>{this.props.children}</DropText>
                        </DropBoxText>
                    ) : null
                }               
            </DropContainer>
        )
    }
}

export default Drop
