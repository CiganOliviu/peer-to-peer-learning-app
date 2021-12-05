import React from 'react'
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function GetSocialDetails({ socialMediaData }) {
    return (
        <div>
            <div className="BreathingSpaceSmall" />
            <div className="social-details">
                <div className="FlexContainerLink">
                    <div className="FlexChildLink">
                        <ExternalLink id="faLinkedin" href={ socialMediaData?.linkedin_url }>
                            <FontAwesomeIcon key='faLinkedin' icon={ faLinkedin } />
                        </ExternalLink>
                    </div>
                    <div className="FlexChildLink">
                        <ExternalLink id="faEnvelope" href={ socialMediaData?.email_url }>
                            <FontAwesomeIcon key='faEnvelope' icon={ faEnvelope } />
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetSocialDetails;