import { Component } from 'react'
import styled from 'styled-components'
import Next from '../assets/ArrowNext.svg'

const LightBoxContainer = styled.div`
    position: relative;
    border-radius: 25px;
    width: auto;
    height: 20em;
    @media all and (max-width: 480px){
        height: 15em;
    }
`

const LightBoxImg = styled.img`
    mix-blend-mode: normal;
    border-radius: 25px;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const PrevButton = styled.button`
    width: 5em;
    height: 5em;
    position: absolute;
    top: 40%;
    left: 1em;
    transform: rotate(180deg);
    background: url(${Next}) center center / 4.5em 4.5em no-repeat;
    border: none;
    color: white;
    opacity: .5;
    cursor: pointer;
    transition: opacity .3s;
    &:hover {
        opacity: 1;
    }
    @media all and (max-width: 480px){
        background: url(${Next}) center center / 2em 2em no-repeat;
        width: 2em;
        height: 2em;
        top: 45%;
    }
`

const NextButton = styled.button`
    width: 5em;
    height: 5em;
    position: absolute;
    top: 40%;
    right: 1em;
    background: url(${Next}) center center / 4.5em 4.5em no-repeat;
    border: none;
    color: white;
    opacity: .5;
    cursor: pointer;
    transition: opacity .3s;
    &:hover {
        opacity: 1;
    }
    @media all and (max-width: 480px){
        background: url(${Next}) center center / 2em 2em no-repeat;
        width: 2em;
        height: 2em;
        top: 45%;
    }
`

const ImgNumber = styled.span`
    color: white;
    position: absolute;
    bottom: 0.5em;
    left: 49%;
    @media all and (max-width: 480px){
        left: 45%;
    }
`

export class LightBox extends Component {

    state = {
        photoArray : this.props.photos,
        picNumber : 0
    }

    componentDidMount() {

        this.setState({
            photoArray : this.props.photos
        })

    }

    handleNextPic = (array) => {
        const next = this.state.picNumber === array.length - 1 ? 0 : this.state.picNumber + 1
        
        this.setState({
            picNumber : next
        })
    }

    handlePrevPic = (array) => {
        const prev = this.state.picNumber === 0 ? array.length - 1 : this.state.picNumber - 1
        
        this.setState({
            picNumber : prev
        })
    }
    
    render() {
        return (
            <LightBoxContainer>
                <PrevButton onClick={() => this.handlePrevPic(this.state.photoArray)} />
                <LightBoxImg src={this.state.photoArray[this.state.picNumber]} alt="place-pictures" />
                <NextButton onClick={() => this.handleNextPic(this.state.photoArray)} />
                <ImgNumber>{this.state.picNumber + 1}/{this.state.photoArray.length}</ImgNumber>
            </LightBoxContainer>
        )
    }
}

export default LightBox
