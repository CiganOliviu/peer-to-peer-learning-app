import React, { useEffect, useState } from 'react'
import { useCustomFetchStaff } from "../../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink  } from "react-external-link";
import { apiBaseURL } from "../../utils/baseUrls";
import './StaffContainer.css'

function StaffContainer() {

    const [staff, setStaff] = useState([]);
    const { serverErrorStaff, apiDataStaff } = useCustomFetchStaff();

    const history = useHistory()

    useEffect(() => {

        if (apiDataStaff) setStaff(apiDataStaff);

        if (serverErrorStaff) throw new Error("Fetch Error")

    }, [apiDataStaff, serverErrorStaff])

    return (
        <div className="FlexContainer">
            {
                staff.map((data) => {
                    return (
                        <div className="FlexChild" data-aos="zoom-in">
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StaffContainer;