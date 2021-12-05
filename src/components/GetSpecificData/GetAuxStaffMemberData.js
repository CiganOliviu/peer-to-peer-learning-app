import React from 'react'
import './SpecificDataCalls.css'

function GetAuxStaffMemberData({ member }) {

    const memberDescription = member?.description ?? '';
    memberDescription.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className="memberDetails">
            <div className="Cell">
                <p className="ShineMessage"><b>City</b></p>
                <p>{ member?.city?.name }</p>
            </div>
            <div className="Cell">
                <p className="ShineMessage"><b>Short description</b></p>
                <p>{ member?.preview }</p>
            </div>
            <div className="Cell">
                <p className="ShineMessage"><b>Description</b></p>
                {
                    memberDescription.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p>{ item }</p>
                                <br/>
                        </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GetAuxStaffMemberData;