import React from 'react'
import { apiBaseURL } from "../../../utils/baseUrls";
import { ExternalLink } from "react-external-link";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function RenderStaff({ data }) {

    const history = useHistory()

    return (
        <div className="FlexChild" data-aos="zoom-in">
            <div className="SpaceForPhone" />
            <div className="OurTeam" onClick={() =>
            { history.push(`teacher-detail/${ data?.id }`) }} >
                <img src={`${apiBaseURL}${ data?.profile}`} alt={ data?.profile }/>
                <div className="TeamContent">
                    <h3 className="Name">{ data?.first_name } {data?.last_name}</h3>
                    <span className="Post">{ data?.preview }</span>
                </div>
            </div>
            <div className="BreathingSpaceMedium"/>
            <div className="social-details">
                <div className="FlexContainerLink">
                    <div className="FlexChildLink">
                        <ExternalLink id="faLinkedin" href={ data?.linkedin_url }>
                            <FontAwesomeIcon key='faLinkedin' icon={ faLinkedin } />
                        </ExternalLink>
                    </div>
                    <div className="FlexChildLink">
                        <ExternalLink id="faEnvelope" href={ data?.email_url }>
                            <FontAwesomeIcon key='faEnvelope' icon={ faEnvelope } />
                        </ExternalLink>
                    </div>
                </div>
            </div>
            <div className="SpaceForLargeBreakPoint" />
            <div className="SpaceForPhone" />
        </div>
    )
}

export default RenderStaff;