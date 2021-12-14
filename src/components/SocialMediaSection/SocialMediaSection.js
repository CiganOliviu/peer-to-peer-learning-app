import React from 'react'
import { ExternalLink } from "react-external-link";
import "aos/dist/aos.css"
import './SocialMediaPresence.css'
import {
    setItemOneIcon,
    setItemOneLink,
    setItemOneTitle,
    setItemThreeIcon,
    setItemThreeLink,
    setItemThreeTitle,
    setItemTwoIcon,
    setItemTwoLink,
    setItemTwoTitle
} from "../../helpers/setSocialMediaContent";

function SocialMediaSection({ isDataAos }) {

    const animationOnScroll = isDataAos ? "zoom-in-down" : "";

    return (
        <div className="SocialMediaPresence">
            <div className="BreathingSpaceSmall"/>
            <h1 data-aos={ animationOnScroll }>Check us out on</h1>
            <div className="BreathingSpaceSmall"/>
            <div className="FlexSocialMediaPresence">
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>{ setItemOneTitle }</b></p>
                    <ExternalLink href={ setItemOneLink  }>{ setItemOneIcon }</ExternalLink>
                </div>
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>{ setItemTwoTitle }</b></p>
                    <ExternalLink href={ setItemTwoLink }>{ setItemTwoIcon }</ExternalLink>
                </div>
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>{ setItemThreeTitle }</b></p>
                    <ExternalLink href={ setItemThreeLink }>{ setItemThreeIcon }</ExternalLink>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaSection;