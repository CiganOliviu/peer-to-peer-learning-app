import React from 'react'
import './SpecificDataCalls.css'
import { componentsClassesMapping } from "../../helpers/classesMapping";

function GetAuxStaffMemberData({ member }) {

    const memberDescription = member?.description ?? '';
    memberDescription.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return (
        <div className={ componentsClassesMapping.MemberDetailsClass }>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>City</b></p>
                <p>{ member?.city?.name }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Short description</b></p>
                <p>{ member?.preview }</p>
            </div>
            <div className={ componentsClassesMapping.CellClass }>
                <p className={ componentsClassesMapping.ShineMessageClass }><b>Description</b></p>
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