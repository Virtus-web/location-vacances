import { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/styles/colors'
/* ======================== COMMENT LES IMPORT DES DATAS POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
// import { Loader } from '../utils/styles/Loader'
// import Error from '../pages/Error'
import LightBox from '../components/LightBox'
import DropShort from '../components/DropShort'
import Rating from '../components/Rating'
/* ======================== AJOUT DE L'IMPORT DES DATAS POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
import { locationData } from '../data/location'


/* ======================== COMMENT LOADERWRAPPER POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
// const LoaderWrapper = styled.div`
//     padding: 10em 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `

const LocationBox = styled.div`
    padding: 1em 3em;
    @media all and (max-width: 480px){
        padding: 0.5em;
    }
`

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    color: ${colors.primary};
`

const PlaceBoxTitle = styled.h2`
    margin: unset;
    font-weight: 500;
    font-size: 36px;
    @media all and (max-width: 480px){
        font-size: 18px;
    }
`

const PlaceBoxCity = styled.p`
    margin: 0.5rem 0 0 0;
    font-weight: 500;
    font-size: 18px;
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`

const HostBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    @media all and (max-width: 480px){
        display: none;
    }
`

const NewBoxMobile = styled.div`
    margin-top: 0.5em;
    padding: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (min-width: 480px){
        display: none;
    }
`

const HostBoxMobile = styled.div`
    display: flex;
    justify-content: space-between;
    width: 7em;
    @media all and (min-width: 480px){
        display: none;
    }
`

const HostBoxName = styled.h3`
    margin: unset;
    font-weight: 500;
    font-size: 18px;
    width: 50%;
    align-self: center;
    text-align: right;
    @media all and (max-width: 480px){
        font-size: 12px;
        color: ${colors.primary};
    }
`

const HostBoxPic = styled.img`
    margin: unset;
    height: 5em;
    width: 5em;
    border-radius: 70px;
    @media all and (max-width: 480px){
        height: 3em;
        width: 3em;
        border-radius: 50px;
    }
`

const RatingBox = styled.div`
    padding: unset;
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 480px){
        display: none;
    }
`

const RatingBoxMobile = styled.div`
    padding: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (min-width: 480px){
        display: none;
    }
`

const TagsBox = styled.ul`
    border: 1px solid transparent;
    padding: unset;
    display: flex;
    justify-content: flex-start;
    width: auto;
`

const Tags = styled.li`
    margin-right: 1em;
    padding: 0.15rem;
    background: ${colors.primary};
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 10px;
    }
`

const DropBoxContainer = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    @media all and (max-width: 480px){
        flex-direction: column;
        align-items: center;
    }
`

export class Location extends Component {

    state = {
        dataLocation: [],
        loading: false,
        error: false,
    }

    /* ======================== COMMENT LE COMPONENT DID MOUNTcPOUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
    // componentDidMount() {

    //     this.setState({
    //         loading : true
    //     })
        
    //     const fetchData = async () => {
                
    //         try {
    //             const response = await fetch(`../../data-location.json`) //localhost/3000 correspond au dossier public dans le projet (index.html)
    //             const data = await response.json()
    //             console.log(data)
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
        /* ======================== COMMENT LE RETURN POUR LE DEPLOIEMENT DU SITE SUR GH PAGES & ON REMPLACE DATA CI-DESSOUS PAR LOCATIONDATA ================== */
        // const data = this.state.dataLocation
        const data = locationData

        // if (this.state.error) {
        //     return <Error />
        // }

        return (
            data && data
                .filter(element => element.id === this.props.match.params.id)
                .map(element => {
                    return  <LocationBox key={element.id}>
                                {/* J'aurais aussi pu mettre les conditions de défilement des photos (LightBox) de l'appart next et prev ici */}
                                <LightBox photos={element.pictures} />
                                <InfoBox>
                                    <div>
                                        <PlaceBoxTitle>{element.title}</PlaceBoxTitle>
                                        <PlaceBoxCity>{element.location}</PlaceBoxCity>
                                        <RatingBoxMobile>
                                            <TagsBox>
                                                {element.tags.map(tag => {
                                                    return <Tags key={tag}>{tag}</Tags>
                                                })}
                                            </TagsBox>
                                        </RatingBoxMobile>
                                    </div>
                                    <HostBox>
                                        <HostBoxName>{element.host.name}</HostBoxName>
                                        <HostBoxPic src={element.host.picture} alt="host-profil" />
                                    </HostBox>
                                </InfoBox>
                                <RatingBox>
                                    <TagsBox>
                                        {element.tags.map(tag => {
                                            return <Tags key={tag}>{tag}</Tags>
                                        })}
                                    </TagsBox>
                                    <Rating number={element.rating} />
                                </RatingBox>
                                <NewBoxMobile>
                                    <Rating number={element.rating} />
                                    <HostBoxMobile>
                                        <HostBoxName>{element.host.name}</HostBoxName>
                                        <HostBoxPic src={element.host.picture} alt="host-profil" />
                                    </HostBoxMobile>
                                </NewBoxMobile>
                                <DropBoxContainer>
                                    <DropShort type="location" title="Description">{element.description}</DropShort>
                                    <DropShort type="location" title="Equipements">{element.equipments.map(item => { return <li key={item}>{item}</li>})}</DropShort>
                                </DropBoxContainer>
                            </LocationBox>
                })
            
            /* ======================== COMMENT LE RETURN POUR LE DEPLOIEMENT DU SITE SUR GH PAGES ================== */
            // this.state.loading ? (
            //     <LoaderWrapper>
            //         <Loader />
            //     </LoaderWrapper>
            // ) : (
            //     data && data
            //     .filter(element => element.id === this.props.match.params.id)
            //     .map(element => {
            //         return  <LocationBox key={element.id}>
            //                     {/* J'aurais aussi pu mettre les conditions de défilement des photos (LightBox) de l'appart next et prev ici */}
            //                     <LightBox photos={element.pictures} />
            //                     <InfoBox>
            //                         <div>
            //                             <PlaceBoxTitle>{element.title}</PlaceBoxTitle>
            //                             <PlaceBoxCity>{element.location}</PlaceBoxCity>
            //                             <RatingBoxMobile>
            //                                 <TagsBox>
            //                                     {element.tags.map(tag => {
            //                                         return <Tags key={tag}>{tag}</Tags>
            //                                     })}
            //                                 </TagsBox>
            //                             </RatingBoxMobile>
            //                         </div>
            //                         <HostBox>
            //                             <HostBoxName>{element.host.name}</HostBoxName>
            //                             <HostBoxPic src={element.host.picture} alt="host-profil" />
            //                         </HostBox>
            //                     </InfoBox>
            //                     <RatingBox>
            //                         <TagsBox>
            //                             {element.tags.map(tag => {
            //                                 return <Tags key={tag}>{tag}</Tags>
            //                             })}
            //                         </TagsBox>
            //                         <Rating number={element.rating} />
            //                     </RatingBox>
            //                     <NewBoxMobile>
            //                         <Rating number={element.rating} />
            //                         <HostBoxMobile>
            //                             <HostBoxName>{element.host.name}</HostBoxName>
            //                             <HostBoxPic src={element.host.picture} alt="host-profil" />
            //                         </HostBoxMobile>
            //                     </NewBoxMobile>
            //                     <DropBoxContainer>
            //                         <DropShort type="location" title="Description">{element.description}</DropShort>
            //                         <DropShort type="location" title="Equipements">{element.equipments.map(item => { return <li key={item}>{item}</li>})}</DropShort>
            //                     </DropBoxContainer>
            //                 </LocationBox>
            //     })
            // )
        )
    }
}

export default Location
