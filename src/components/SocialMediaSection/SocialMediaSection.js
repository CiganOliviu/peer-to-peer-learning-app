import React from 'react'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";
import "aos/dist/aos.css"
import './SocialMediaPresence.css'

function SocialMediaSection({ isDataAos }) {

    const animationOnScroll = isDataAos ? "zoom-in-down" : "";

    return (
        <div className="SocialMediaPresence">
            <div className="BreathingSpaceSmall"/>
            <h1 data-aos={ animationOnScroll }>Check us out on</h1>
            <div className="BreathingSpaceSmall"/>
            <div className="FlexSocialMediaPresence">
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>Facebook</b></p>
                    <ExternalLink href="https://www.facebook.com/Peer2PeerLearning"><FontAwesomeIcon id="facebook" key='faFacebook' icon={ faFacebook } /></ExternalLink>
                </div>
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>Instagram</b></p>
                    <ExternalLink href="https://www.instagram.com/peertopeer_learning/"><FontAwesomeIcon id="instagram" key='faInstagram' icon={ faInstagram } /></ExternalLink>
                </div>
                <div data-aos={ animationOnScroll } className="FlexSocialMediaChild">
                    <p><b>Email</b></p>
                    <ExternalLink href="mailto:learningptp@gmail.com"><FontAwesomeIcon id="email" key='faEnvelope' icon={ faEnvelope } /></ExternalLink>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaSection;