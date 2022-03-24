import { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
/* ======================== COMMENT LES IMPORT DES DATAS POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
// import Error from '../pages/Error'
// import { Loader } from '../utils/styles/Loader'
/* ======================== AJOUT DE L'IMPORT DES DATAS POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
import { locationData } from '../data/location'


const CardsBloc = styled.div`
    margin-top: 3em;
    padding: 5.5em;
    background: #F7F7F7;
    border-radius: 25px;
    width: auto;
    ${'' /* Ici il faut mettre width: auto pour gérer le problème du padding qui déborde à droite (avec celui du conteneur parent, souvent leBody) */}
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    @media all and (max-width: 480px){
        background: transparent;
        padding: unset;
    }
`

const CardsContainer = styled(Link)`
    ${'' /* background: ${colors.primaryGradient}; */}
    box-shadow: 3px 3px 14px 0px rgb(50 50 50 / 35%);
    border-radius: 10px;
    margin-bottom: 5.5em;
    width: 30em;
    height: 20em;
    @media all and (max-width: 480px){
        height: 13em;
        margin-bottom: 2em;
    }
`
const Cardamome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 100%;
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const CardText = styled.h5`
    margin: 0;
    color: white;
    position: absolute;
    bottom: 1em;
    left: 1em;
    width: 90%;
`

/* ======================== COMMENT LOADERWRAPPER POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
// const LoaderWrapper = styled.div`
//     padding: 10em 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `

class Card extends Component {

    state = {
        dataLocation: [],
        loading: false,
        error: false
    }

    /* ======================== COMMENT LE COMPONENT DID MOUNT POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
    // componentDidMount() {

    //     this.setState({
    //         loading : true
    //     })
        
    //     const fetchData = async () => {
                
    //         try {
    //             const response = await fetch(`./data-location.json`) //localhost/3000 correspond au dossier public dans le projet (index.html)
    //             const data = await response.json()
    //             this.setState({
    //                 dataLocation : data?.locationData
    //             })
    //         } catch (err) {
    //             console.log(err)
    //             this.setState({
    //                 error : true
    //             })
    //         } finally {
    //             this.setState({
    //                 loading : false
    //             })
    //         }
    //     }
    //     fetchData()
    // }
    
    render() {
        
        // if (this.state.error) {
        //     return <Error />
        // }
        
        return (
            <div>
                        <CardsBloc className="row row-cols-1 row-cols-md-3 g-4">
                            {locationData && locationData.map((elt) => (
                                    <CardsContainer key={elt.id} className="col" to={`/location/${elt.id}`}>
                                        <Cardamome className="card">
                                            <CardImg src={elt.cover} className="card-img-top" alt="location cover" />
                                            <CardText className="card-title">{elt.title}</CardText>
                                        </Cardamome>
                                    </CardsContainer>
                                )
                            )}
                        </CardsBloc>
            </div>

                /* ======================== COMMENT LE RETURN POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
                // {   this.state.loading ? (
                //         <LoaderWrapper>
                //             <Loader />
                //         </LoaderWrapper>
                //     ) : (
                //         <CardsBloc className="row row-cols-1 row-cols-md-3 g-4">
                //             {this.state.dataLocation && this.state.dataLocation.map((elt) => (
                //                     <CardsContainer key={elt.id} className="col" to={`/location/${elt.id}`}>
                //                         <Cardamome className="card">
                //                             <CardImg src={elt.cover} className="card-img-top" alt="location cover" />
                //                             <CardText className="card-title">{elt.title}</CardText>
                //                         </Cardamome>
                //                     </CardsContainer>
                //                 )
                //             )}
                //         </CardsBloc>
                //     )
                // }
        )
    }
}

export default Card

