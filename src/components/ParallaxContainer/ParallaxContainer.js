import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCustomFetchHeroCard } from "../../backendApi/apiCalls";
import { apiBaseURL } from "../../backendApi/baseBackendUrl";
import './ParallaxContainer.css'
import { ParallaxButtonContent, ParallaxTitle } from "../../helpers/setHomePageContent";
import { routesMapping } from "../../helpers/routesMapping";
import {componentsClassesMapping} from "../../helpers/classesMapping";

function ParallaxContainer() {

    const [heroCardDetails, setHeroCardDetails] = useState(null);
    const { serverErrorHeroCard, apiDataHeroCard } = useCustomFetchHeroCard();
    const standardHeroCardUrl = `url(${apiBaseURL}${heroCardDetails?.image})`;

    useEffect(() => {

        if (apiDataHeroCard) setHeroCardDetails(apiDataHeroCard[Math.floor(Math.random() * apiDataHeroCard?.length)]);
    }, [apiDataHeroCard])

    useEffect(() => {

        if (serverErrorHeroCard) throw new Error("Fetch Error");
    }, [serverErrorHeroCard])

    return (
        <div className={ componentsClassesMapping.ParallaxContainerClass } style={{ backgroundImage: standardHeroCardUrl }}>
            <div data-aos="fade-in" className={ componentsClassesMapping.ParallaxBackgroundClass }>
                <div className={ componentsClassesMapping.GradientClass }>
                    <h1>{ ParallaxTitle }</h1>
                    <Link to={ routesMapping.OurTeamRoute } className={ componentsClassesMapping.NavigationButtonsClass } id="MoreInfoButton">
                        { ParallaxButtonContent }
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ParallaxContainer;