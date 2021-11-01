import { useState, useEffect } from 'react'
import { useCustomFetchHeroCard } from '../../utils/apiCalls'
import { Link } from 'react-router-dom';
import { getUserInfoParse } from "../../utils/localStorage";
import { scrollToRef } from "../../utils/refScroller";
import { stagingBaseUrl } from "../../utils/baseUrls";

import "aos/dist/aos.css"
import './HeroCard.css'


function HeroCard({ introRef, contactRef }) {

    const [heroCardDetails, setHeroCardDetails] = useState(null);
    const { serverErrorHeroCard, apiDataHeroCard } = useCustomFetchHeroCard();

    const userInfo = getUserInfoParse();

    useEffect(() => {

        if (apiDataHeroCard) setHeroCardDetails(apiDataHeroCard[Math.floor(Math.random() * apiDataHeroCard?.length)]);

        if (serverErrorHeroCard) {
            console.log(serverErrorHeroCard);
        }

    }, [apiDataHeroCard, serverErrorHeroCard])

    const executeScrollIntro = () => scrollToRef(introRef);
    const executeScrollContact = () => scrollToRef(contactRef);

    return (
        <div className="HeroContainer" style={{backgroundImage: `url(${stagingBaseUrl}${heroCardDetails?.image})`}}>
            <div className="SmallPadding">

            </div>

            <div className="WelcomeMessage" style={{ overflowX: 'hidden', }} >
                <h1 data-aos="zoom-in">{heroCardDetails?.title}</h1>
                <div>&nbsp;</div>

                <p data-aos="zoom-in">{heroCardDetails?.overview}</p>
                <div>&nbsp;</div><div>&nbsp;</div>

                <div className="HeroButtons" data-aos="zoom-in">
                    <button onClick={ executeScrollIntro } className="NavigationButtons" id="MoreInfoButton">Read more!</button>
                    { !userInfo ? <Link to="login/" className="NavigationButtons" id="LoginButton">Login</Link> : <></> }
                    <button onClick={ executeScrollContact } className="NavigationButtons" id="MoreInfoButton">Contact us!</button>
                </div>

            </div>
        </div>
    )
}

export default HeroCard;