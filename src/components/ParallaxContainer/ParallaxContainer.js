import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCustomFetchHeroCard } from "../../utils/apiCalls";
import { apiBaseURL } from "../../utils/baseUrls";
import './ParallaxContainer.css'

function ParallaxContainer() {

    const [heroCardDetails, setHeroCardDetails] = useState(null);
    const { serverErrorHeroCard, apiDataHeroCard } = useCustomFetchHeroCard();

    useEffect(() => {

        if (apiDataHeroCard) setHeroCardDetails(apiDataHeroCard[Math.floor(Math.random() * apiDataHeroCard?.length)]);

        if (serverErrorHeroCard)
            throw new Error("Fetch Error");

    }, [apiDataHeroCard, serverErrorHeroCard])

    return (
        <div className="ParallaxContainer" style={{backgroundImage: `url(${apiBaseURL}${heroCardDetails?.image})`}}>
            <div data-aos="fade-in" className='ParallaxBackground'>
                <div className='Gradient'>
                    <h1>Ready for the future of teaching?</h1>
                    <Link to="docx/" className="NavigationButtons" id="MoreInfoButton">
                        Read more!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ParallaxContainer;