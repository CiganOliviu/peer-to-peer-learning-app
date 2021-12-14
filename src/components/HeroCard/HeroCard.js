import { useState, useEffect } from 'react';
import { useCustomFetchHeroCard } from '../../backendApi/apiCalls'
import { Link } from 'react-router-dom';
import { getUserInfoParse } from "../../helpers/localStorage";
import { scrollToRef } from "../../helpers/refScroller";
import { apiBaseURL } from "../../backendApi/baseBackendUrl";
import { routesMapping } from "../../helpers/routesMapping";
import "aos/dist/aos.css";
import './HeroCard.css';
import { appClassesMapping } from "../../helpers/classesMapping";

function HeroCard({ introRef }) {

    const [heroCardDetails, setHeroCardDetails] = useState(null);
    const { serverErrorHeroCard, apiDataHeroCard } = useCustomFetchHeroCard();

    const userInfo = getUserInfoParse();

    useEffect(() => {

        if (apiDataHeroCard) setHeroCardDetails(apiDataHeroCard[Math.floor(Math.random() * apiDataHeroCard?.length)]);
    }, [apiDataHeroCard])

    useEffect(() => {

        if (serverErrorHeroCard) throw new Error("Error");
    }, [serverErrorHeroCard])

    const executeScrollIntro = () => scrollToRef(introRef);

    return (
        <div className="HeroContainer" style={{ backgroundImage: `url(${apiBaseURL}${heroCardDetails?.image})` }}>
            <div className={ appClassesMapping.SmallPaddingClass } />

            <div className="WelcomeMessage" style={{ overflowX: 'hidden', }} >
                <h1 data-aos="zoom-in">{ heroCardDetails?.title }</h1>
                <div>&nbsp;</div>

                <p data-aos="zoom-in">{ heroCardDetails?.overview }</p>
                <div>&nbsp;</div><div>&nbsp;</div>

                <div className="HeroButtons" data-aos="zoom-in">
                    <Link to="#" onClick={ executeScrollIntro } className="NavigationButtons" id="MoreInfoButton">Read more!</Link>
                    { !userInfo ? <Link to={ routesMapping.LoginRoute } className="NavigationButtons" id="LoginButton">Login</Link> : <></> }
                    <Link to={ routesMapping.ContactRoute } className="NavigationButtons" id="MoreInfoButton">Contact us!</Link>
                </div>

            </div>
        </div>
    )
}

export default HeroCard;