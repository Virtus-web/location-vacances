import { Component } from 'react'
import styled from 'styled-components'
import StarFull from '../assets/StarFull.svg'
import StarEmpty from '../assets/StarEmpty.svg'

const StarBox = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
`

const Star = styled.img`
    margin-left: 0.5rem;
    height: 1.5em;
    width: 1.5em;
    @media all and (max-width: 480px){
        margin-left: 0;
        margin-right: 0.3rem;
        height: 1em;
        width: 1em;
    }
`

export class Rating extends Component {
    
    render() {
        const range = [1, 2, 3, 4, 5]
        const starTypeFull = <Star src={StarFull} alt='star-full-icon' />
        const starTypeEmpty = <Star src={StarEmpty} alt='star-empty-icon' />

        return (
            <StarBox>
                {range.map((element) =>
                    this.props.number >= element ? (
                        <span key={element.toString()}>{starTypeFull}</span>
                    ) : null
                )}
                {range.map((element) =>
                    (5-this.props.number) >= element ? (
                        <span key={element.toString()}>{starTypeEmpty}</span>
                    ) : null
                )}
            </StarBox>
        )
    }
}

export default Rating
