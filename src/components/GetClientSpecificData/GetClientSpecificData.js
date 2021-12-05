import React from "react";

function GetClientSpecificData({ clientInfo }) {
    return (
        <div className="TeacherDetails">
            <div>&nbsp;</div>
            <div className="Cell">
                <h2>{ clientInfo?.first_name } { clientInfo?.last_name }</h2>
            </div>
            <div>&nbsp;</div>
            <div className="Border"/>
            <div>&nbsp;</div>
            <div className="Cell">
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Email</b></p>
                <p>{ clientInfo?.email }</p>
            </div>
            <div className="Cell">
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Phone</b></p>
                <p>{ clientInfo?.phone_number }</p>
            </div>
            <div className="Cell">
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>High School</b></p>
                <p>{ clientInfo?.high_school?.name }</p>
            </div>
            <div className="Cell">
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>Profile</b></p>
                <p>{ clientInfo?.high_school_profile?.profile }</p>
            </div>
            <div className="Cell">
                <div>&nbsp;</div>
                <p className="ShineMessage"><b>City</b></p>
                <p>{ clientInfo?.city?.name }</p>
            </div>
        </div>
    )
}

export default GetClientSpecificData;
