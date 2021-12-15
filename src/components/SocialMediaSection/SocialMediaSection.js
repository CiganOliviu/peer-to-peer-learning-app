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
import {appClassesMapping, componentsClassesMapping} from "../../helpers/classesMapping";

function SocialMediaSection({ isDataAos }) {

    const animationOnScroll = isDataAos ? "zoom-in-down" : "";

    return (
        <div className={ componentsClassesMapping.SocialMediaPresenceClass }>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <h1 data-aos={ animationOnScroll }>Check us out on</h1>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
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