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
    color: black;
    font-size: 24px;
    margin: unset;
    line-height: 142.6%;
    @media all and (max-width: 480px){
        font-size: 13px;
    }
`

export class Drop extends Component {

    state = {
        dropped: false,
        matches: window.matchMedia("(min-width: 480px)").matches
    }

    // componentDidMount() {
        // const handler = e => this.setState({matches: e.matches})
        // window.matchMedia("(min-width: 1280px)").addEventListener('change', handler)

    //     if (this.state.matches) {
    //         if (this.props.type === 'location') {
    //             document.querySelector('#test').style.width = '47%'
    //             document.querySelector('#test').style.margin = '0'
    //         } else {
    //             document.querySelector('#test').style.width = '80%'
    //         }
    //     } else {
    //         document.querySelector('#test').style.width = '100%'
    //     }
    // }

    // componentDidMount() { 
        
    //     const handler = e => this.setState({matches: e.matches})
    //     window.matchMedia("(min-width: 480px)").addEventListener('change', handler)

    //     if (this.state.matches) {
    //         document.querySelector('#dropBox').style.width = '100%'
    //     } else {
    //         document.querySelector('#dropBox').style.width = '47%'
    //         document.querySelector('#dropBox').style.margin = '0'
    //     }
    // }
    
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

        const handler = e => this.setState({matches: e.matches})
        window.matchMedia("(min-width: 480px)").addEventListener('change', handler)

        if (this.state.matches) {
            document.querySelector('#dropBox').style.width = '100%'
        } else {
            document.querySelector('#dropBox').style.width = '47%'
            document.querySelector('#dropBox').style.margin = '0'
        }
        
        // if (this.props.type === 'location') {
        //     document.querySelector('#test').style.width = '47%'
        //     document.querySelector('#test').style.margin = '0'
        // } else {
        //     document.querySelector('#test').style.width = '80%'
        // }

        // const dropSize = this.props.drop ? {width: '47%', margin: '0'} : {width: '80%'}
        const dropColor = this.props.color ? {color: colors.primary} : {color: 'black'}
            
        return (
            <DropContainer id="dropBox">
            {/* <DropContainer> */}
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
                            <DropText style={dropColor}>{this.props.children}</DropText>
                        </DropBoxText>
                    ) : null
                }               
            </DropContainer>
        )
    }
}

export default Drop

//Backup Card

// {   this.state.dataLocation.map((elt) => {
//                                     return  !elt.id ? <Error /> : 
//                                         <CardsContainer key={elt.id} className="col" to={`/location/${elt.id}`}>
//                                             <Cardamome className="card">
//                                                 <CardImg src={elt.cover} className="card-img-top" alt="location cover" />
//                                                 <CardText className="card-title">{elt.title}</CardText>
//                                             </Cardamome>
//                                         </CardsContainer>
//                                 })
//                             }