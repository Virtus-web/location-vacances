import { Component } from 'react'
import styled from 'styled-components'
import AboutLogo from '../assets/AboutLogo.png'
import HeaderLogo from '../components/HeaderLogo'
import Drop from '../components/Drop'

const AboutContainer = styled.div`
    padding: 1em 3em;
    @media all and (max-width: 480px){
        padding: 1em 0;
    
    }
`

export class About extends Component {

    render() {
        return (
            <AboutContainer>
                <HeaderLogo logo={AboutLogo} />
                <Drop title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Drop>
                <Drop title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Drop>
                <Drop title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Drop>
                <Drop title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Drop>
            </AboutContainer>
        )
    }
}

export default About
