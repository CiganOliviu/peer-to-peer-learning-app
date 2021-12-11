import React from 'react'
import { apiBaseURL } from "../../helpers/baseBackendUrl";
import './SpecificDataCalls.css'

function GetEssentialStaffMemberData({ member }) {

    const memberDescription = member?.description ?? '';
    memberDescription.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className="memberDetails">
            <img src={`${apiBaseURL}${ member?.profile}`} alt={`${member?.first_name} 
            ${member?.last_name}`} />

            <div>&nbsp;</div>
            <div className="Border"/>
            <div>&nbsp;</div>

            <div className="Cell">
                <h2>{ member?.last_name } { member?.first_name }</h2>
                <div>&nbsp;</div>
                <h3>{ member?.position?.name }</h3>
            </div>
            <div className="BreathingSpaceSmall"/>
            <div className="Cell">
                <p className="ShineMessage"><b>Email</b></p>
                <p>{ member?.email }</p>
            </div>
            <div className="Cell">
                <p className="ShineMessage"><b>Education</b></p>
                <p>{ member?.faculty?.university?.name }</p>
                <p>{ member?.faculty?.name }</p>
            </div>
        </div>
    )
}

export default GetEssentialStaffMemberData;