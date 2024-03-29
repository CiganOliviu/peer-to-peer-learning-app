import React from 'react'
import { apiBaseURL } from "../../backendApi/baseBackendUrl";
import './SpecificDataCalls.css'
import { appClassesMapping, componentsClassesMapping } from "../../helpers/classesMapping";

function GetEssentialStaffMemberData({ member }) {

    const memberDescription = member?.description ?? '';
    memberDescription.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className={ componentsClassesMapping.MemberDetailsClass }>
            <img src={`${apiBaseURL}${ member?.profile}`} alt={`${member?.first_name} 
            ${member?.last_name}`} />

            <div>&nbsp;</div>
            <div className="Border"/>
            <div>&nbsp;</div>

            <div className={ componentsClassesMapping.CellClass } >
                <h2>{ member?.last_name } { member?.first_name }</h2>
                <div>&nbsp;</div>
                <h3>{ member?.position?.name }</h3>
            </div>
            <div className={ appClassesMapping.BreathingSpaceSmallClass } />
            <div className={ componentsClassesMapping.CellClass } >
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Email</b></p>
                <p>{ member?.email }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass } >
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Education</b></p>
                <p>{ member?.faculty?.university?.name }</p>
                <p>{ member?.faculty?.name }</p>
            </div>
        </div>
    )
}

export default GetEssentialStaffMemberData;