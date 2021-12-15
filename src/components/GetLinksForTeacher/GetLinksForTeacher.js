import React from 'react'
import { ExternalLink } from "react-external-link";
import './GetLinksForTeacher.css'
import { componentsClassesMapping } from "../../helpers/classesMapping";

function GetLinksForTeacher() {

    const ptpControlCenterLink = 'https://ptpcc.azurewebsites.net/';

    return (
        <div className={ componentsClassesMapping.DataForTeacherClass }>
            <h2>Go to..</h2>
            <div>&nbsp;</div>
            <ExternalLink className={ componentsClassesMapping.ShineMessageLinkClass } href={ ptpControlCenterLink }>
                <b>PeerToPeer Control Center</b>
            </ExternalLink>
        </div>
    )
}

export default GetLinksForTeacher;
