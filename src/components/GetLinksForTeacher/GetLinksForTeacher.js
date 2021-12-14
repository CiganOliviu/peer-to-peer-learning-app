import React from 'react'
import { ExternalLink } from "react-external-link";
import './GetLinksForTeacher.css'

function GetLinksForTeacher() {

    const ptpControlCenterLink = 'https://ptpcc.azurewebsites.net/';

    return (
        <div className="DataForTeacher">
            <h2>Go to..</h2>
            <div>&nbsp;</div>
            <ExternalLink className="ShineMessageLink" href={ ptpControlCenterLink }>
                <b>PeerToPeer Control Center</b>
            </ExternalLink>
        </div>
    )
}

export default GetLinksForTeacher;
